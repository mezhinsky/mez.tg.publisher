import { IsArray, IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  excerpt?: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsUrl({ require_protocol: true, require_tld: false })
  coverUrl?: string;

  @IsOptional()
  @IsBoolean()
  createEditDeliveries?: boolean = true;
}
