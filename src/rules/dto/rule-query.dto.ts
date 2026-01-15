import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ChannelRuleType } from '../../../generated/prisma';

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
}
