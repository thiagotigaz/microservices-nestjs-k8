import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { EventDto } from './event.dto';
import { PartialType } from '@nestjs/mapped-types';

export class CreateServiceDto extends PartialType(EventDto) {
  @MaxLength(64)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  description: string;

  tags: string[];
}
