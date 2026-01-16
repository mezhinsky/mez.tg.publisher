import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { ChannelQueryDto } from './dto/channel-query.dto';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { Channel, Prisma } from '../../generated/prisma';

@Injectable()
export class ChannelsService {
  private readonly logger = new Logger(ChannelsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    query: ChannelQueryDto,
  ): Promise<PaginatedResponseDto<Channel>> {
    const where: Prisma.ChannelWhereInput = {};

    if (query.search) {
      where.OR = [
        { key: { contains: query.search, mode: 'insensitive' } },
        { title: { contains: query.search, mode: 'insensitive' } },
        { username: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    if (query.isActive !== undefined) {
      where.isActive = query.isActive;
    }

    const [channels, total] = await Promise.all([
      this.prisma.channel.findMany({
        where,
        skip: query.skip,
        take: query.take,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { rules: true, deliveries: true },
          },
        },
      }),
      this.prisma.channel.count({ where }),
    ]);

    return new PaginatedResponseDto(
      channels,
      total,
      query.page ?? 1,
      query.limit ?? 20,
    );
  }

  async findOne(id: string): Promise<Channel> {
    const channel = await this.prisma.channel.findUnique({
      where: { id },
      include: {
        rules: true,
        _count: {
          select: { deliveries: true },
        },
      },
    });

    if (!channel) {
      throw new NotFoundException(`Channel with id "${id}" not found`);
    }

    return channel;
  }

  async findByKey(key: string): Promise<Channel | null> {
    return this.prisma.channel.findUnique({
      where: { key },
    });
  }

  async create(dto: CreateChannelDto): Promise<Channel> {
    const existing = await this.prisma.channel.findUnique({
      where: { key: dto.key },
    });

    if (existing) {
      throw new ConflictException(
        `Channel with key "${dto.key}" already exists`,
      );
    }

    const channel = await this.prisma.channel.create({
      data: dto,
    });

    this.logger.log(`Created channel: ${channel.key} (${channel.id})`);
    return channel;
  }

  async update(id: string, dto: UpdateChannelDto): Promise<Channel> {
    await this.findOne(id); // Ensure exists

    const channel = await this.prisma.channel.update({
      where: { id },
      data: dto,
    });

    this.logger.log(`Updated channel: ${channel.key} (${channel.id})`);
    return channel;
  }

  async remove(id: string): Promise<Channel> {
    const channel = await this.findOne(id);

    // Soft delete by setting isActive = false
    const updated = await this.prisma.channel.update({
      where: { id },
      data: { isActive: false },
    });

    this.logger.log(`Disabled channel: ${channel.key} (${channel.id})`);
    return updated;
  }

  async hardDelete(id: string): Promise<Channel> {
    const channel = await this.findOne(id);

    await this.prisma.channel.delete({
      where: { id },
    });

    this.logger.log(`Deleted channel: ${channel.key} (${channel.id})`);
    return channel;
  }

  /**
   * Get all active channels that match given tags
   */
  async findChannelsForTags(tags: string[]): Promise<Channel[]> {
    if (!tags.length) {
      return [];
    }

    const channels = await this.prisma.channel.findMany({
      where: {
        isActive: true,
        rules: {
          some: {
            isActive: true,
            type: 'TAG',
            value: { in: tags },
          },
        },
      },
    });

    return channels;
  }

  /**
   * Get all active channels (for ALL rule type, future use)
   */
  async findAllActiveChannels(): Promise<Channel[]> {
    return this.prisma.channel.findMany({
      where: { isActive: true },
    });
  }
}
