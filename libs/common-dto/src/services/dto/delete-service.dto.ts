import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { EventDto } from './event.dto';

export class DeleteServiceDto extends PartialType(EventDto) {
  @IsNotEmpty()
  id: number;
}
