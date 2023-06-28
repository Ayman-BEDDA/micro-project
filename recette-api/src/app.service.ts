import { Injectable } from '@nestjs/common';
import { Recette } from './stubs/recette/v1alpha/recette';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.RecetteCreateInput): Promise<Recette> {
    return this.prisma.myRecette.create({ data }) as Promise<Recette>;
  }

  findAll(): Promise<Recette[]> {
    return this.prisma.myRecette.findMany() as Promise<Recette[]>;
  }

  delete(id: number): Promise<Recette> {
    return this.prisma.myRecette.delete({
      where: { id },
    }) as Promise<Recette>;
  }
  findById(id: number): Promise<Recette> {
    return this.prisma.myRecette.findUnique({
      where: { id },
    }) as Promise<Recette>;
  }
  findByNom(nom: string): Promise<Recette> {
    return this.prisma.myRecette.findUnique({
      where: { nom },
    }) as Promise<Recette>;
  }
  async update(id: number, data: Prisma.RecetteUpdateInput): Promise<Recette> {
    return this.prisma.myRecette.update({
      where: { id },
      data,
    }) as Promise<Recette>;
  }
}
