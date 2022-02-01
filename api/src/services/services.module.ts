import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'services',
            brokers: ['host.docker.internal:9094'],
          },
          consumer: {
            groupId: 'services',
          },
        },
      },
    ]),
  ],
  controllers: [ServicesController],
  providers: [
    ServicesService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaClient: ClientKafka) => {
        return kafkaClient.connect();
      },
      inject: ['CLIENT_KAFKA'],
    },
  ],
})
export class ServicesModule {}
