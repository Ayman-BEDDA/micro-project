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
