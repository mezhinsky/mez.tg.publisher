import {
  IsString,
  IsBoolean,
  IsOptional,
  IsEnum,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ChannelRuleType } from '../../../generated/prisma';

export class CreateRuleDto {
  @IsString()
  channelId: string;

  @IsOptional()
  @IsEnum(ChannelRuleType)
  type?: ChannelRuleType = ChannelRuleType.TAG;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  value: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;
}
