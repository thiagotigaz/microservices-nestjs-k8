import { Controller, Logger, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { KafkaServiceDto } from './dto/kafka-service.dto';

import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { DeleteServiceDto } from './dto/delete-service.dto';

@Controller()
export class ServicesController {
  constructor(private eventEmitter: EventEmitter2) {}

  @EventPattern('services')
  serviceEvent(@Payload(new ValidationPipe()) { value }: KafkaServiceDto) {
    Logger.debug(value, 'ServicesController - serviceEvent');
    this.eventEmitter.emit(value.eventType, value);
  }

  @OnEvent('ServiceCreated')
  handleServiceCreatedEvent(createServiceDto: CreateServiceDto) {
    Logger.debug(
      createServiceDto,
      'ServicesController - handleServiceCreatedEvent',
    );
  }

  @OnEvent('ServiceUpdated')
  handleServiceUpdatedEvent(updateServiceDto: UpdateServiceDto) {
    Logger.debug(
      updateServiceDto,
      'ServicesController - handleServiceUpdatedEvent',
    );
  }

  @OnEvent('ServiceDeleted')
  handleServiceDeletedEvent(deleteServiceDto: DeleteServiceDto) {
    Logger.debug(
      deleteServiceDto,
      'ServicesController - handleServiceDeletedEvent',
    );
  }
}
