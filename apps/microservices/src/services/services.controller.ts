import { Controller, Logger, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import {
  KafkaServiceDto,
  CreateServiceDto,
  UpdateServiceDto,
  DeleteServiceDto,
} from '@limascloud/common-dto';

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
