import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger, Inject, forwardRef } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bullmq';
import {
  TELEGRAM_DELIVERY_QUEUE,
  DeliveryJobData,
  DeliveryJobResult,
} from '../constants';
import { DeliveriesService } from '../../posts/deliveries.service';
import { PostsService } from '../../posts/posts.service';
import { TelegramService } from '../../telegram/telegram.service';
import { ChannelsService } from '../../channels/channels.service';
import { PrismaService } from '../../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

interface ArticlePayload {
  title: string;
  excerpt?: string;
  url: string;
  coverUrl?: string;
  mediaUrls?: string[];
  tags: string[];
}

@Processor(TELEGRAM_DELIVERY_QUEUE)
export class DeliveryProcessor extends WorkerHost {
  private readonly logger = new Logger(DeliveryProcessor.name);
  private readonly mainChannelKey: string;

  constructor(
    @Inject(forwardRef(() => DeliveriesService))
    private readonly deliveriesService: DeliveriesService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    private readonly telegramService: TelegramService,
    private readonly channelsService: ChannelsService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    super();
    this.mainChannelKey = this.configService.get<string>(
      'mainChannelKey',
      'mem_main',
    );
  }

  async process(job: Job<DeliveryJobData>): Promise<DeliveryJobResult> {
    const { deliveryId } = job.data;
    this.logger.debug(`Processing delivery job: ${deliveryId}`);

    const delivery = await this.prisma.postDelivery.findUnique({
      where: { id: deliveryId },
      include: {
        post: true,
        channel: true,
      },
    });

    if (!delivery) {
      this.logger.error(`Delivery not found: ${deliveryId}`);
      return { success: false, error: 'Delivery not found' };
    }

    if (delivery.status === 'CANCELLED') {
      this.logger.log(`Delivery cancelled, skipping: ${deliveryId}`);
      return { success: false, error: 'Delivery cancelled' };
    }

    if (delivery.status === 'SENT') {
      this.logger.log(`Delivery already sent, skipping: ${deliveryId}`);
      return {
        success: true,
        telegramMessageId: delivery.telegramMessageId || undefined,
      };
    }

    if (!delivery.channel.isActive) {
      this.logger.warn(`Channel inactive, failing delivery: ${deliveryId}`);
      await this.deliveriesService.markAsFailed(
        deliveryId,
        'Channel is inactive',
      );
      await this.postsService.updatePostStatus(delivery.postId);
      return { success: false, error: 'Channel inactive' };
    }

    await this.deliveriesService.incrementAttempts(deliveryId);

    try {
      const payload = delivery.post.payload as unknown as ArticlePayload;
      let telegramMessageId: string;

      // Determine send method based on media availability
      const hasMediaGroup = payload.mediaUrls && payload.mediaUrls.length >= 2;
      const hasSingleMedia = payload.mediaUrls?.length === 1 || payload.coverUrl;

      if (hasMediaGroup) {
        // Send media group (album) for 2+ images
        const caption = this.formatCaption(payload);
        const result = await this.telegramService.sendMediaGroup({
          chatId: delivery.channel.chatId,
          mediaUrls: payload.mediaUrls!,
          caption,
          parseMode: 'HTML',
        });
        // Store first message ID (the one with caption)
        telegramMessageId = result.messageIds.join(',');
        this.logger.debug(
          `Sent media group (${payload.mediaUrls!.length} photos) to ${delivery.channel.key}`,
        );
      } else if (hasSingleMedia) {
        // Send single photo
        const photoUrl = payload.mediaUrls?.[0] || payload.coverUrl!;
        const caption = this.formatCaption(payload);
        const result = await this.telegramService.sendPhoto({
          chatId: delivery.channel.chatId,
          photoUrl,
          caption,
          parseMode: 'HTML',
        });
        telegramMessageId = String(result.messageId);
        this.logger.debug(`Sent photo message to ${delivery.channel.key}`);
      } else {
        // Send text message (no media)
        const message = this.formatMessage(payload);
        const result = await this.telegramService.sendMessage({
          chatId: delivery.channel.chatId,
          text: message,
          parseMode: 'HTML',
          disableWebPagePreview: false,
        });
        telegramMessageId = String(result.messageId);
        this.logger.debug(`Sent text message to ${delivery.channel.key}`);
      }

      // Extract first message ID for URL building
      const firstMessageId = parseInt(telegramMessageId.split(',')[0], 10);

      await this.deliveriesService.markAsSent(deliveryId, telegramMessageId);
      await this.postsService.updatePostStatus(delivery.postId);

      this.logger.log(
        `Delivery sent: ${deliveryId} -> ${delivery.channel.key} (msgId: ${telegramMessageId})`,
      );

      // Emit event for main channel delivery
      if (delivery.channel.key === this.mainChannelKey) {
        const telegramUrl = delivery.channel.username
          ? this.telegramService.buildMessageUrl(
              delivery.channel.username,
              firstMessageId,
            )
          : undefined;

        this.eventEmitter.emit('tg.post.published', {
          articleId: delivery.post.articleId,
          channelKey: delivery.channel.key,
          telegramMessageId,
          telegramUrl,
        });

        this.logger.log(
          `Emitted tg.post.published for article: ${delivery.post.articleId}`,
        );
      }

      return {
        success: true,
        telegramMessageId,
        telegramUrl: delivery.channel.username
          ? this.telegramService.buildMessageUrl(
              delivery.channel.username,
              firstMessageId,
            )
          : undefined,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error(`Delivery failed: ${deliveryId} - ${errorMessage}`);

      await this.deliveriesService.incrementAttempts(deliveryId, errorMessage);

      // Check if this is the last attempt
      if (job.attemptsMade >= (job.opts.attempts || 5) - 1) {
        await this.deliveriesService.markAsFailed(deliveryId, errorMessage);
        await this.postsService.updatePostStatus(delivery.postId);
        this.logger.warn(
          `Delivery permanently failed after ${job.attemptsMade + 1} attempts: ${deliveryId}`,
        );
      }

      throw error; // Re-throw to trigger retry
    }
  }

  private formatMessage(payload: ArticlePayload): string {
    let message = `<b>${this.escapeHtml(payload.title)}</b>\n\n`;

    if (payload.excerpt) {
      message += `${this.escapeHtml(payload.excerpt)}\n\n`;
    }

    message += `<a href="${payload.url}">Read more</a>`;

    if (payload.tags && payload.tags.length > 0) {
      const hashtags = payload.tags
        .slice(0, 5)
        .map((tag) => `#${tag.replace(/[^a-zA-Z0-9_]/g, '_')}`)
        .join(' ');
      message += `\n\n${hashtags}`;
    }

    return message;
  }

  // Caption for photos is limited to 1024 chars, so we use a shorter format
  private formatCaption(payload: ArticlePayload): string {
    const maxLength = 1024;
    let caption = `<b>${this.escapeHtml(payload.title)}</b>\n\n`;

    if (payload.excerpt) {
      const remainingSpace = maxLength - caption.length - 100; // Reserve space for link and tags
      const excerpt = payload.excerpt.length > remainingSpace
        ? payload.excerpt.slice(0, remainingSpace - 3) + '...'
        : payload.excerpt;
      caption += `${this.escapeHtml(excerpt)}\n\n`;
    }

    caption += `<a href="${payload.url}">Read more</a>`;

    if (payload.tags && payload.tags.length > 0) {
      const hashtags = payload.tags
        .slice(0, 3) // Fewer tags for caption
        .map((tag) => `#${tag.replace(/[^a-zA-Z0-9_]/g, '_')}`)
        .join(' ');
      caption += `\n\n${hashtags}`;
    }

    // Ensure we don't exceed the limit
    if (caption.length > maxLength) {
      caption = caption.slice(0, maxLength - 3) + '...';
    }

    return caption;
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<DeliveryJobData>) {
    this.logger.debug(`Job completed: ${job.id}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<DeliveryJobData>, error: Error) {
    this.logger.error(`Job failed: ${job.id} - ${error.message}`);
  }
}
