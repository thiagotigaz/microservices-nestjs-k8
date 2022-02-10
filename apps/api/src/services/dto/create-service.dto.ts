import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateServiceDto {
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
