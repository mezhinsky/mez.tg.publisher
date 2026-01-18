import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DeliveryQueryDto } from './dto/delivery-query.dto';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { PostDelivery, DeliveryStatus, Prisma } from '../../generated/prisma';
import { QueueService } from '../queue/queue.service';

@Injectable()
export class DeliveriesService {
  private readonly logger = new Logger(DeliveriesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: QueueService,
  ) {}

  async findAll(
    query: DeliveryQueryDto,
  ): Promise<PaginatedResponseDto<PostDelivery>> {
    const where: Prisma.PostDeliveryWhereInput = {};
    const sortBy = query.sortBy ?? 'createdAt';
    const order: Prisma.SortOrder = (query.order ?? 'desc') as Prisma.SortOrder;
    let orderBy: Prisma.PostDeliveryOrderByWithRelationInput = { createdAt: 'desc' };

    if (query.postId) {
      where.postId = query.postId;
    }

    if (query.channelId) {
      where.channelId = query.channelId;
    }

    if (query.status) {
      where.status = query.status;
    }

    switch (sortBy) {
      case 'updatedAt':
        orderBy = { updatedAt: order };
        break;
      case 'status':
        orderBy = { status: order };
        break;
      case 'attempts':
        orderBy = { attempts: order };
        break;
      case 'sentAt':
        orderBy = { sentAt: order };
        break;
      case 'createdAt':
      default:
        orderBy = { createdAt: order };
        break;
    }

    const [deliveries, total] = await Promise.all([
      this.prisma.postDelivery.findMany({
        where,
        skip: query.skip,
        take: query.take,
        orderBy,
        include: {
          post: {
            select: { id: true, articleId: true, status: true },
          },
          channel: {
            select: { id: true, key: true, title: true },
          },
        },
      }),
      this.prisma.postDelivery.count({ where }),
    ]);

    return new PaginatedResponseDto(
      deliveries,
      total,
      query.page ?? 1,
      query.limit ?? 20,
    );
  }

  async findOne(id: string): Promise<PostDelivery> {
    const delivery = await this.prisma.postDelivery.findUnique({
      where: { id },
      include: {
        post: true,
        channel: true,
      },
    });

    if (!delivery) {
      throw new NotFoundException(`Delivery with id "${id}" not found`);
    }

    return delivery;
  }

  /**
   * Upsert a delivery for a post-channel pair
   */
  async upsertDelivery(
    postId: string,
    channelId: string,
  ): Promise<PostDelivery> {
    const existing = await this.prisma.postDelivery.findFirst({
      where: { postId, channelId, revision: 0 },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.postDelivery.create({
      data: {
        postId,
        channelId,
        revision: 0,
        status: DeliveryStatus.PENDING,
        attempts: 0,
      },
    });
  }

  /**
   * Retry a single delivery
   */
  async retry(id: string): Promise<PostDelivery> {
    const delivery = await this.findOne(id);

    if (delivery.status !== 'FAILED' && delivery.status !== 'CANCELLED') {
      throw new BadRequestException(
        `Cannot retry delivery with status "${delivery.status}". Only FAILED or CANCELLED deliveries can be retried.`,
      );
    }

    const updated = await this.prisma.postDelivery.update({
      where: { id },
      data: {
        status: DeliveryStatus.PENDING,
        attempts: 0,
        lastError: null,
      },
    });

    await this.queueService.addDeliveryJob(id);

    this.logger.log(`Retried delivery: ${id}`);
    return updated;
  }

  /**
   * Cancel a pending delivery
   */
  async cancel(id: string): Promise<PostDelivery> {
    const delivery = await this.findOne(id);

    if (delivery.status !== 'PENDING') {
      throw new BadRequestException(
        `Cannot cancel delivery with status "${delivery.status}". Only PENDING deliveries can be cancelled.`,
      );
    }

    const updated = await this.prisma.postDelivery.update({
      where: { id },
      data: {
        status: DeliveryStatus.CANCELLED,
      },
    });

    this.logger.log(`Cancelled delivery: ${id}`);
    return updated;
  }

  /**
   * Mark delivery as sent
   */
  async markAsSent(
    id: string,
    telegramMessageId: string,
  ): Promise<PostDelivery> {
    return this.prisma.postDelivery.update({
      where: { id },
      data: {
        status: DeliveryStatus.SENT,
        telegramMessageId,
        sentAt: new Date(),
      },
    });
  }

  /**
   * Mark delivery as failed
   */
  async markAsFailed(id: string, error: string): Promise<PostDelivery> {
    return this.prisma.postDelivery.update({
      where: { id },
      data: {
        status: DeliveryStatus.FAILED,
        lastError: error,
      },
    });
  }

  /**
   * Increment attempt counter
   */
  async incrementAttempts(id: string, error?: string): Promise<PostDelivery> {
    return this.prisma.postDelivery.update({
      where: { id },
      data: {
        attempts: { increment: 1 },
        lastError: error,
      },
    });
  }
}
