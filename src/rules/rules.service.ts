import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { RuleQueryDto } from './dto/rule-query.dto';
import { PaginatedResponseDto } from '../common/dto/paginated-response.dto';
import { ChannelRule, Prisma } from '../../generated/prisma';

@Injectable()
export class RulesService {
  private readonly logger = new Logger(RulesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    query: RuleQueryDto,
  ): Promise<PaginatedResponseDto<ChannelRule>> {
    const where: Prisma.ChannelRuleWhereInput = {};
    const sortBy = query.sortBy ?? 'createdAt';
    const order: Prisma.SortOrder = (query.order ?? 'desc') as Prisma.SortOrder;
    let orderBy: Prisma.ChannelRuleOrderByWithRelationInput = {
      createdAt: 'desc',
    };

    if (query.channelId) {
      where.channelId = query.channelId;
    }

    if (query.type) {
      where.type = query.type;
    }

    if (query.value) {
      where.value = { contains: query.value, mode: 'insensitive' };
    }

    if (query.isActive !== undefined) {
      where.isActive = query.isActive;
    }

    switch (sortBy) {
      case 'updatedAt':
        orderBy = { updatedAt: order };
        break;
      case 'value':
        orderBy = { value: order };
        break;
      case 'type':
        orderBy = { type: order };
        break;
      case 'isActive':
        orderBy = { isActive: order };
        break;
      case 'createdAt':
      default:
        orderBy = { createdAt: order };
        break;
    }

    const [rules, total] = await Promise.all([
      this.prisma.channelRule.findMany({
        where,
        skip: query.skip,
        take: query.take,
        orderBy,
        include: {
          channel: {
            select: { id: true, key: true, title: true },
          },
        },
      }),
      this.prisma.channelRule.count({ where }),
    ]);

    return new PaginatedResponseDto(
      rules,
      total,
      query.page ?? 1,
      query.limit ?? 20,
    );
  }

  async findOne(id: string): Promise<ChannelRule> {
    const rule = await this.prisma.channelRule.findUnique({
      where: { id },
      include: {
        channel: {
          select: { id: true, key: true, title: true },
        },
      },
    });

    if (!rule) {
      throw new NotFoundException(`Rule with id "${id}" not found`);
    }

    return rule;
  }

  async create(dto: CreateRuleDto): Promise<ChannelRule> {
    // Verify channel exists
    const channel = await this.prisma.channel.findUnique({
      where: { id: dto.channelId },
    });

    if (!channel) {
      throw new BadRequestException(
        `Channel with id "${dto.channelId}" not found`,
      );
    }

    // Check for duplicate rule
    const existing = await this.prisma.channelRule.findUnique({
      where: {
        channelId_type_value: {
          channelId: dto.channelId,
          type: dto.type ?? 'TAG',
          value: dto.value,
        },
      },
    });

    if (existing) {
      throw new ConflictException(
        `Rule for channel "${channel.key}" with type "${dto.type}" and value "${dto.value}" already exists`,
      );
    }

    const rule = await this.prisma.channelRule.create({
      data: {
        channelId: dto.channelId,
        type: dto.type ?? 'TAG',
        value: dto.value,
        isActive: dto.isActive ?? true,
      },
      include: {
        channel: {
          select: { id: true, key: true, title: true },
        },
      },
    });

    this.logger.log(
      `Created rule: ${rule.type}="${rule.value}" for channel ${channel.key}`,
    );
    return rule;
  }

  async update(id: string, dto: UpdateRuleDto): Promise<ChannelRule> {
    const existing = await this.findOne(id);

    // If updating value, check for conflicts
    if (dto.value && dto.value !== existing.value) {
      const conflict = await this.prisma.channelRule.findUnique({
        where: {
          channelId_type_value: {
            channelId: existing.channelId,
            type: existing.type,
            value: dto.value,
          },
        },
      });

      if (conflict) {
        throw new ConflictException(
          `Rule with type "${existing.type}" and value "${dto.value}" already exists for this channel`,
        );
      }
    }

    const rule = await this.prisma.channelRule.update({
      where: { id },
      data: dto,
      include: {
        channel: {
          select: { id: true, key: true, title: true },
        },
      },
    });

    this.logger.log(`Updated rule: ${rule.id}`);
    return rule;
  }

  async remove(id: string): Promise<ChannelRule> {
    const rule = await this.findOne(id);

    await this.prisma.channelRule.delete({
      where: { id },
    });

    this.logger.log(`Deleted rule: ${rule.id}`);
    return rule;
  }
}
