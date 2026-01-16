import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsUrl,
  ArrayMaxSize,
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

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  @ArrayMaxSize(10, {
    message: 'mediaUrls can contain maximum 10 items (Telegram limit)',
  })
  mediaUrls?: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
