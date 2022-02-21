import { Module } from '@nestjs/common';
import { CommonDtoService } from './common-dto.service';

@Module({
  providers: [CommonDtoService],
  exports: [CommonDtoService],
})
export class CommonDtoModule {}
