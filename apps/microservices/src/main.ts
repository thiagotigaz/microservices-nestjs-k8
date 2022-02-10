import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['host.docker.internal:9094'],
        },
        consumer: {
          groupId: `microservices-${Math.floor(Math.random() * 100)}`,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
