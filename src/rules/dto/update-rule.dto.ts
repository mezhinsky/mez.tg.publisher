import { IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';

export class UpdateRuleDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  value?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
