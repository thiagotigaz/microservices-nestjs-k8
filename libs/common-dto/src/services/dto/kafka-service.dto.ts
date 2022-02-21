import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';
import { UpdateServiceDto } from './update-service.dto';
import { DeleteServiceDto } from './delete-service.dto';
import { EventDto } from './event.dto';

export class KafkaServiceDto {
  @Type(() => EventDto, {
    discriminator: {
      property: 'eventType',
      subTypes: [
        { value: CreateServiceDto, name: 'ServiceCreated' },
        { value: UpdateServiceDto, name: 'ServiceUpdated' },
        { value: DeleteServiceDto, name: 'ServiceDeleted' },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  @ValidateNested()
  @IsNotEmpty()
  value: CreateServiceDto | UpdateServiceDto | DeleteServiceDto;
}
