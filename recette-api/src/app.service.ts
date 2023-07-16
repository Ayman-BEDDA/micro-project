
import { Injectable } from '@nestjs/common';
import { Recette } from './stubs/recette/v1alpha/recette';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RecetteCreateInput): Promise<Recette> {
    return this.prisma.recette.create({ data });
  }

  findAll(): Promise<Recette[]> {
    return this.prisma.recette.findMany();
  }

  delete(id: number): Promise<Recette> {
    return this.prisma.recette.delete({
      where: { id },
    });
  }
  findById(id: number): Promise<Recette> {
    return this.prisma.recette.findUnique({
      where: { id },
    });
  }
  findByName(name: string): Promise<Recette> {
    return this.prisma.recette.findUnique({
      where: { name },
    });
  }
  async update(id: number, data: Prisma.RecetteUpdateInput): Promise<Recette> {
    return this.prisma.recette.update({
      where: { id },
      data,
    });
  }
}


/*
import { Injectable } from '@nestjs/common';
import { Recette } from './stubs/recette/v1alpha/recette';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { AppService as NutritionAppService } from '../../nutrition-api/src/app.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService, private readonly nutritionAppService: NutritionAppService) {}

  async create(data: Prisma.RecetteCreateInput): Promise<Recette> {
    const { nutritionId } = data;
    const nutrition = await this.nutritionAppService.findById(nutritionId);
    if (!nutrition) {
        return this.prisma.recette.create({
            data: {
                name: data.name,
                description: data.description,
                note: data.note,
                nutritionId: nutritionId,
            },
        });
    }
    throw new Error(`La nutrition avec l'ID ${nutritionId} n'existe pas.`);
}

  findAll(): Promise<Recette[]> {
    return this.prisma.recette.findMany();
  }

  delete(id: number): Promise<Recette> {
    return this.prisma.recette.delete({
      where: { id },
    });
  }
  findById(id: number): Promise<Recette> {
    return this.prisma.recette.findUnique({
      where: { id },
    });
  }
  findByName(name: string): Promise<Recette> {
    return this.prisma.recette.findUnique({
      where: { name },
    });
  }

  async update(
    id: number,
    data: Prisma.RecetteUpdateInput
  ): Promise<Recette> {
    return this.prisma.recette.update({
      where: { id },
      data,
    });
  }
}
*/