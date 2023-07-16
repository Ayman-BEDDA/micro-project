import { Module } from '@nestjs/common';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {grpcConfig} from "./grpc.config";
import { ConfigModule, ConfigService } from '@nestjs/config';
import {PrismaService} from "./prisma.service";

@Module({
  imports: [
    GrpcReflectionModule.registerAsync({
      imports: [ConfigModule],
      useFactory: grpcConfig,
      inject: [ConfigService],
    })
  ],  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [AppService],
})
export class AppModule {}


/*
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { nutritionGrpcOptions } from './grpc.config';
import { ClientsModule } from '@nestjs/microservices';
import {PrismaService} from "./prisma.service";

@Module({
  imports: [ClientsModule.register([nutritionGrpcOptions])],
  providers: [AppService, PrismaService],
  exports: [AppService],
})
export class AppModule {}
*/