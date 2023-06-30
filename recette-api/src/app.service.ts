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
