import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesController } from './services/services.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), EventEmitterModule.forRoot()],
  controllers: [AppController, ServicesController],
  providers: [AppService],
})
export class AppModule {}
