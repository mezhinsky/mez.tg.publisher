import { IsBoolean, IsObject, IsOptional } from 'class-validator';
import { Prisma } from '../../../generated/prisma';

export class UpdatePostDto {
  @IsObject()
  payload!: Prisma.JsonObject;

  @IsOptional()
  @IsBoolean()
  createEditDeliveries?: boolean = true;
}

