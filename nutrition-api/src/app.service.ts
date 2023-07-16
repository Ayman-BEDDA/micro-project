import { Injectable } from '@nestjs/common';
import { Nutrition } from './stubs/nutrition/v1alpha/nutrition';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.NutritionCreateInput): Promise<Nutrition> {
    return this.prisma.nutrition.create({ data });
  }

  findAll(): Promise<Nutrition[]> {
    return this.prisma.nutrition.findMany();
  }

  delete(id: number): Promise<Nutrition> {
    return this.prisma.nutrition.delete({
      where: { id },
    });
  }
  findById(id: number): Promise<Nutrition> {
    return this.prisma.nutrition.findUnique({
      where: { id },
    });
  }
  findByName(name: string): Promise<Nutrition> {
    return this.prisma.nutrition.findUnique({
      where: { name },
    });
  }
  async update(id: number, data: Prisma.NutritionUpdateInput): Promise<Nutrition> {
    return this.prisma.nutrition.update({
      where: { id },
      data,
    });
  }
}

/*
import { OnModuleInit } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  NUTRITION_CR_UD_SERVICE_NAME,
  NutritionCRUDServiceClient,
} from './stubs/nutrition/v1alpha/nutrition';
import { firstValueFrom } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { Nutrition } from './stubs/nutrition/v1alpha/nutrition';

@Injectable()
export class AppService implements OnModuleInit {
  private nutritionService: NutritionCRUDServiceClient;
  constructor(@Inject(NUTRITION_CR_UD_SERVICE_NAME) private client: ClientGrpc, private prisma: PrismaService) {}
  onModuleInit() {
    this.nutritionService =
      this.client.getService<NutritionCRUDServiceClient>(NUTRITION_CR_UD_SERVICE_NAME);
  }

   create(data: Prisma.NutritionCreateInput): Promise<Nutrition> {
    return this.prisma.nutrition.create({ data });
  }

   findAll(): Promise<Nutrition[]> {
    return this.prisma.nutrition.findMany();
  }

  delete(id: number): Promise<Nutrition> {
    return this.prisma.nutrition.delete({
      where: { id },
    });
  }
  findById(id: number): Promise<Nutrition> {
    return this.prisma.nutrition.findUnique({
      where: { id },
    });
  }
  findByName(name: string): Promise<Nutrition> {
    return this.prisma.nutrition.findUnique({
      where: { name },
    });
  }
  async update(id: number, data: Prisma.NutritionUpdateInput): Promise<Nutrition> {
    return this.prisma.nutrition.update({
      where: { id },
      data,
    });
  }
}
*/
