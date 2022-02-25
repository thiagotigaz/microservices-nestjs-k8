import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'CLIENT_KAFKA',
        useFactory: (configService: ConfigService) => ({
          name: 'CLIENT_KAFKA',
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'services',
              brokers: configService.get<string>('KAFKA_BROKERS').split(','),
            },
            consumer: {
              groupId: 'services',
            },
          },
        }),
        inject: [ConfigService],
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
