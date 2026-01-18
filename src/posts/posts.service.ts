import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostQueryDto } from './dto/post-query.dto';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { DeliveryStatus, Post, PostStatus, Prisma } from '../../generated/prisma';
import { QueueService } from '../queue/queue.service';

export interface ArticlePayload {
  title: string;
  excerpt?: string;
  url: string;
  coverUrl?: string;
  mediaUrls?: string[];
  tags: string[];
}

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: QueueService,
  ) {}

  async findAll(query: PostQueryDto): Promise<PaginatedResponseDto<Post>> {
    const where: Prisma.PostWhereInput = {};
    const sortBy = query.sortBy ?? 'createdAt';
    const order: Prisma.SortOrder = (query.order ?? 'desc') as Prisma.SortOrder;
    let orderBy: Prisma.PostOrderByWithRelationInput = { createdAt: 'desc' };

    if (query.articleId) {
      where.articleId = query.articleId;
    }

    if (query.status) {
      where.status = query.status;
    }

    if (query.from || query.to) {
      where.createdAt = {};
      if (query.from) {
        where.createdAt.gte = new Date(query.from);
      }
      if (query.to) {
        where.createdAt.lte = new Date(query.to);
      }
    }

    switch (sortBy) {
      case 'updatedAt':
        orderBy = { updatedAt: order };
        break;
      case 'articleId':
        orderBy = { articleId: order };
        break;
      case 'status':
        orderBy = { status: order };
        break;
      case 'createdAt':
      default:
        orderBy = { createdAt: order };
        break;
    }

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        where,
        skip: query.skip,
        take: query.take,
        orderBy,
        include: {
          _count: {
            select: { deliveries: true },
          },
        },
      }),
      this.prisma.post.count({ where }),
    ]);

    return new PaginatedResponseDto(
      posts,
      total,
      query.page ?? 1,
      query.limit ?? 20,
    );
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        deliveries: {
          include: {
            channel: {
              select: { id: true, key: true, title: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }

    return post;
  }

  async findByArticleId(articleId: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { articleId },
      include: {
        deliveries: {
          include: {
            channel: {
              select: { id: true, key: true, title: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!post) {
      throw new NotFoundException(
        `Post for articleId "${articleId}" not found`,
      );
    }

    return post;
  }

  /**
   * Upsert a post for an article
   */
  async upsertPost(articleId: string, payload: ArticlePayload): Promise<Post> {
    const payloadHash = this.hashPayload(payload);

    const post = await this.prisma.post.upsert({
      where: { articleId },
      create: {
        articleId,
        payload: payload as unknown as Prisma.JsonObject,
        payloadHash,
        status: PostStatus.PENDING,
      },
      update: {
        payload: payload as unknown as Prisma.JsonObject,
        payloadHash,
        // Don't reset status on update - keep existing
      },
    });

    this.logger.log(`Upserted post for article: ${articleId} (${post.id})`);
    return post;
  }

  /**
   * Retry all failed deliveries for a post
   */
  async retryPost(id: string): Promise<{ retriedCount: number }> {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        deliveries: {
          where: { status: 'FAILED' },
        },
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }

    const latestFailedByChannel = new Map<string, (typeof post.deliveries)[number]>();
    for (const delivery of post.deliveries) {
      const existing = latestFailedByChannel.get(delivery.channelId);
      if (!existing || delivery.revision > existing.revision) {
        latestFailedByChannel.set(delivery.channelId, delivery);
      }
    }

    let retriedCount = 0;
    for (const delivery of latestFailedByChannel.values()) {
      // Reset delivery status
      await this.prisma.postDelivery.update({
        where: { id: delivery.id },
        data: {
          status: 'PENDING',
          attempts: 0,
          lastError: null,
        },
      });

      // Add to queue
      await this.queueService.addDeliveryJob(delivery.id);
      retriedCount++;
    }

    if (retriedCount > 0) {
      // If we actually retried something, force post back to PENDING.
      await this.prisma.post.update({
        where: { id },
        data: { status: PostStatus.PENDING },
      });
    } else {
      // No FAILED deliveries to retry; keep status consistent with actual deliveries.
      await this.updatePostStatus(id);
    }

    this.logger.log(`Retried ${retriedCount} deliveries for post ${id}`);
    return { retriedCount };
  }

  /**
   * Update post payload and (optionally) enqueue edit deliveries for already-sent channels.
   *
   * This creates new PostDelivery rows (revision + 1) that target the same Telegram message(s)
   * and apply the latest payload via Telegram edit APIs.
   */
  async updatePostPayload(
    id: string,
    payload: Prisma.JsonObject,
    options?: { createEditDeliveries?: boolean },
  ): Promise<{ post: Post; editDeliveriesCreated: number }> {
    const existingPost = await this.prisma.post.findUnique({ where: { id } });
    if (!existingPost) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }

    const payloadHash = this.hashPayload(payload);
    const post = await this.prisma.post.update({
      where: { id },
      data: {
        payload,
        payloadHash,
      },
    });

    const createEditDeliveries = options?.createEditDeliveries ?? true;
    if (!createEditDeliveries) {
      return { post, editDeliveriesCreated: 0 };
    }

    const deliveries = await this.prisma.postDelivery.findMany({
      where: { postId: id },
      select: {
        id: true,
        channelId: true,
        revision: true,
        status: true,
        telegramMessageId: true,
      },
    });

    const latestByChannel = new Map<
      string,
      {
        channelId: string;
        revision: number;
        status: DeliveryStatus;
        telegramMessageId: string | null;
      }
    >();

    for (const delivery of deliveries) {
      const existing = latestByChannel.get(delivery.channelId);
      if (!existing || delivery.revision > existing.revision) {
        latestByChannel.set(delivery.channelId, {
          channelId: delivery.channelId,
          revision: delivery.revision,
          status: delivery.status as DeliveryStatus,
          telegramMessageId: delivery.telegramMessageId,
        });
      }
    }

    const createdDeliveryIds: string[] = [];

    for (const latest of latestByChannel.values()) {
      // If the newest delivery is already in-flight, just let it pick up the new payload.
      if (latest.status === DeliveryStatus.PENDING) {
        continue;
      }

      // If we never successfully sent (no Telegram message id), we can't edit.
      if (!latest.telegramMessageId) {
        continue;
      }

      const created = await this.prisma.postDelivery.create({
        data: {
          postId: id,
          channelId: latest.channelId,
          revision: latest.revision + 1,
          status: DeliveryStatus.PENDING,
          telegramMessageId: latest.telegramMessageId,
          attempts: 0,
          lastError: null,
          sentAt: null,
        },
        select: { id: true },
      });

      createdDeliveryIds.push(created.id);
    }

    await Promise.all(
      createdDeliveryIds.map((deliveryId) =>
        this.queueService.addDeliveryJob(deliveryId),
      ),
    );

    await this.updatePostStatus(id);

    this.logger.log(
      `Updated post payload: ${id}; created ${createdDeliveryIds.length} edit deliveries`,
    );

    return { post, editDeliveriesCreated: createdDeliveryIds.length };
  }

  /**
   * Update post status based on delivery statuses
   */
  async updatePostStatus(postId: string): Promise<Post> {
    const deliveries = await this.prisma.postDelivery.findMany({
      where: { postId },
      select: { channelId: true, revision: true, status: true },
    });

    if (deliveries.length === 0) {
      // Post processed, but there are no target deliveries (e.g. no matching channels/rules).
      return this.prisma.post.update({
        where: { id: postId },
        data: { status: PostStatus.SENT },
      });
    }

    // Treat deliveries as a timeline per channel. Only the latest revision per channel affects the Post status.
    const latestByChannel = new Map<
      string,
      { revision: number; status: DeliveryStatus }
    >();
    for (const delivery of deliveries) {
      const existing = latestByChannel.get(delivery.channelId);
      if (!existing || delivery.revision > existing.revision) {
        latestByChannel.set(delivery.channelId, {
          revision: delivery.revision,
          status: delivery.status as DeliveryStatus,
        });
      }
    }

    const latestStatuses = Array.from(latestByChannel.values()).map(
      (d) => d.status,
    );

    const allSent = latestStatuses.every((s) => s === 'SENT');
    const allFailed = latestStatuses.every((s) => s === 'FAILED');
    const anyPending = latestStatuses.some((s) => s === 'PENDING');

    let status: PostStatus;
    if (anyPending) {
      status = PostStatus.PENDING;
    } else if (allSent) {
      status = PostStatus.SENT;
    } else if (allFailed) {
      status = PostStatus.FAILED;
    } else {
      status = PostStatus.PARTIAL;
    }

    return this.prisma.post.update({
      where: { id: postId },
      data: { status },
    });
  }

  private hashPayload(payload: unknown): string {
    return Buffer.from(JSON.stringify(payload)).toString('base64').slice(0, 32);
  }
}
