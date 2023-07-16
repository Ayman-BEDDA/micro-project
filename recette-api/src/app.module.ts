import { Module } from '@nestjs/common';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {grpcConfig} from "./grpc.config";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GrpcReflectionModule.registerAsync({
      imports: [ConfigModule],
      useFactory: grpcConfig,
      inject: [ConfigService],
    })
  ],  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}