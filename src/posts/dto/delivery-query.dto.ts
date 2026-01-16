import { IsOptional, IsString, IsEnum, IsIn } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { DeliveryStatus } from '../../../generated/prisma';

const allowedSortBy = ['createdAt', 'updatedAt', 'status', 'attempts', 'sentAt'] as const;
type DeliverySortBy = (typeof allowedSortBy)[number];

export class DeliveryQueryDto extends PaginationDto {
  @IsOptional()
  @IsString()
  postId?: string;

  @IsOptional()
  @IsString()
  channelId?: string;

  @IsOptional()
  @IsEnum(DeliveryStatus)
  status?: DeliveryStatus;

  @IsOptional()
  @IsIn(allowedSortBy)
  sortBy?: DeliverySortBy = 'createdAt';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';
}
