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

  // Allow localhost / internal hosts (e.g. MinIO) for dev environments.
  @IsUrl({ require_protocol: true, require_tld: false })
  @IsNotEmpty()
  url: string;

  @IsUrl({ require_protocol: true, require_tld: false })
  @IsOptional()
  coverUrl?: string;

  @IsOptional()
  @IsArray()
  @IsUrl({ require_protocol: true, require_tld: false }, { each: true })
  @ArrayMaxSize(10, {
    message: 'mediaUrls can contain maximum 10 items (Telegram limit)',
  })
  mediaUrls?: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
