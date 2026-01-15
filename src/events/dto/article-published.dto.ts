import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsUrl,
} from 'class-validator';

export class ArticlePublishedDto {
  @IsString()
  @IsNotEmpty()
  articleId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  excerpt?: string;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsUrl()
  @IsOptional()
  coverUrl?: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
