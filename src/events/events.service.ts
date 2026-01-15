import { Injectable, Logger } from '@nestjs/common';
import { ArticlePublishedDto } from './dto/article-published.dto';
import { PostsService, ArticlePayload } from '../posts/posts.service';
import { DeliveriesService } from '../posts/deliveries.service';
import { ChannelsService } from '../channels/channels.service';
import { QueueService } from '../queue/queue.service';

interface HandleResult {
  postId: string;
  deliveriesCreated: number;
}

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  constructor(
    private readonly postsService: PostsService,
    private readonly deliveriesService: DeliveriesService,
    private readonly channelsService: ChannelsService,
    private readonly queueService: QueueService,
  ) {}

  async handleArticlePublished(dto: ArticlePublishedDto): Promise<HandleResult> {
    const payload: ArticlePayload = {
      title: dto.title,
      excerpt: dto.excerpt,
      url: dto.url,
      coverUrl: dto.coverUrl,
      tags: dto.tags,
    };

    // 1. Upsert Post
    const post = await this.postsService.upsertPost(dto.articleId, payload);
    this.logger.log(`Upserted post: ${post.id} for article: ${dto.articleId}`);

    // 2. Find matching channels based on tags
    const channels = await this.channelsService.findChannelsForTags(dto.tags);
    this.logger.log(`Found ${channels.length} channels for tags: ${dto.tags.join(', ')}`);

    // 3. Create deliveries and queue jobs
    let deliveriesCreated = 0;

    for (const channel of channels) {
      // Upsert delivery (idempotent)
      const delivery = await this.deliveriesService.upsertDelivery(
        post.id,
        channel.id,
      );

      // Only queue if pending (not already sent)
      if (delivery.status === 'PENDING') {
        await this.queueService.addDeliveryJob(delivery.id);
        deliveriesCreated++;
        this.logger.debug(
          `Queued delivery: ${delivery.id} for channel: ${channel.key}`,
        );
      } else {
        this.logger.debug(
          `Skipped delivery ${delivery.id} (status: ${delivery.status})`,
        );
      }
    }

    this.logger.log(
      `Article ${dto.articleId}: created ${deliveriesCreated} new deliveries`,
    );

    return {
      postId: post.id,
      deliveriesCreated,
    };
  }
}
