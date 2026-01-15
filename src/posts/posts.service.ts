import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostQueryDto } from './dto/post-query.dto';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { Post, PostStatus, Prisma } from '../../generated/prisma';
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

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        where,
        skip: query.skip,
        take: query.take,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { deliveries: true },
          },
        },
      }),
      this.prisma.post.count({ where }),
    ]);

    return new PaginatedResponseDto(posts, total, query.page ?? 1, query.limit ?? 20);
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
      throw new NotFoundException(`Post for articleId "${articleId}" not found`);
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

    let retriedCount = 0;
    for (const delivery of post.deliveries) {
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

    // Update post status
    await this.prisma.post.update({
      where: { id },
      data: { status: PostStatus.PENDING },
    });

    this.logger.log(`Retried ${retriedCount} deliveries for post ${id}`);
    return { retriedCount };
  }

  /**
   * Update post status based on delivery statuses
   */
  async updatePostStatus(postId: string): Promise<Post> {
    const deliveries = await this.prisma.postDelivery.findMany({
      where: { postId },
    });

    if (deliveries.length === 0) {
      return this.prisma.post.update({
        where: { id: postId },
        data: { status: PostStatus.PENDING },
      });
    }

    const allSent = deliveries.every((d) => d.status === 'SENT');
    const allFailed = deliveries.every((d) => d.status === 'FAILED');
    const anyPending = deliveries.some((d) => d.status === 'PENDING');

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

  private hashPayload(payload: ArticlePayload): string {
    return Buffer.from(JSON.stringify(payload)).toString('base64').slice(0, 32);
  }
}
