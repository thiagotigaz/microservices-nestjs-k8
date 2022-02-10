import { IsNotEmpty, IsString } from 'class-validator';

export class EventDto {
  @IsString()
  @IsNotEmpty()
  eventType: string;
}
