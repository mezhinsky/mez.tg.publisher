import {
  IsOptional,
  IsString,
  IsEnum,
  IsDateString,
  IsIn,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { PostStatus } from '../../../generated/prisma';

const allowedSortBy = [
  'createdAt',
  'updatedAt',
  'articleId',
  'status',
] as const;
type PostSortBy = (typeof allowedSortBy)[number];

export class PostQueryDto extends PaginationDto {
  @IsOptional()
  @IsString()
  articleId?: string;

  @IsOptional()
  @IsEnum(PostStatus)
  status?: PostStatus;

  @IsOptional()
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;

  @IsOptional()
  @IsIn(allowedSortBy)
  sortBy?: PostSortBy = 'createdAt';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';
}
