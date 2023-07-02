import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceNutrition } from './app.service';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcConfig } from './grpc.config';
import { PrismaService } from './prisma.service';
@Module({
  imports: [GrpcReflectionModule.register(grpcConfig)],
  controllers: [AppController],
  providers: [AppServiceNutrition, PrismaService],
})
export class AppModule {}