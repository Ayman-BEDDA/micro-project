import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {grpcConfig} from "./grpc.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cs = app.get(ConfigService);

  app.connectMicroservice(grpcConfig(cs));
  await app.startAllMicroservices();

  await app.listen(8883);
}
bootstrap();

/*
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { nutritionGrpcOptions } from './grpc.config';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    nutritionGrpcOptions,
  );
  await app.listen();
}
bootstrap();
*/