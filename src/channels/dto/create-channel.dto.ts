import { IsString, IsBoolean, IsOptional, Matches, MinLength, MaxLength } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @Matches(/^[a-z0-9_]+$/, {
    message: 'key must contain only lowercase letters, numbers and underscores',
  })
  key: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  chatId: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  username?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  title?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;
}
