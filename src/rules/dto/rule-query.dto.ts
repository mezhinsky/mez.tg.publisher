import { IsOptional, IsString, IsBoolean, IsEnum, IsIn } from 'class-validator';
import { Transform } from 'class-transformer';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ChannelRuleType } from '../../../generated/prisma';

const allowedSortBy = [
  'createdAt',
  'updatedAt',
  'value',
  'type',
  'isActive',
] as const;
type RuleSortBy = (typeof allowedSortBy)[number];

export class RuleQueryDto extends PaginationDto {
  @IsOptional()
  @IsString()
  channelId?: string;

  @IsOptional()
  @IsEnum(ChannelRuleType)
  type?: ChannelRuleType;

  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsIn(allowedSortBy)
  sortBy?: RuleSortBy = 'createdAt';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';
}
