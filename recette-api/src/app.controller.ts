import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client';
import { grpcNutrition } from './grpc.config';
import { NUTRITION_CR_UD_SERVICE_NAME, NutritionCRUDServiceClient } from './stubs/nutrition/v1alpha/nutrition';
import {
  AddRequest,
  AddResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  RECETTE_CR_UD_SERVICE_NAME,
  Recette,
  RecetteCRUDServiceController,
  UpdateRequest,
  UpdateResponse,
  RecetteCRUDServiceControllerMethods,
} from './stubs/recette/v1alpha/recette';
import { GrpcMethod, Client, ClientGrpc} from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
import { firstValueFrom } from 'rxjs';
import { GetResponse as NutritionGetResponse } from './stubs/nutrition/v1alpha/nutrition';
import { GetResponse as RecetteGetResponse } from './stubs/recette/v1alpha/recette';

@Controller()
@RecetteCRUDServiceControllerMethods()
export class AppController implements RecetteCRUDServiceController {
  @Client(grpcNutrition)
  private clientNutrition: ClientGrpc;

  private grpcNutritionService: NutritionCRUDServiceClient;

  constructor(private readonly appService: AppService) {}

  onModuleInit() {
    this.grpcNutritionService = this.clientNutrition.getService<NutritionCRUDServiceClient>(NUTRITION_CR_UD_SERVICE_NAME);
  }

  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let recette: Recette;
    let recettes: Recette[] = [];
    if (request.id) {
      recette = await this.appService.findById(request.id);
      return { recettes: [recette] };
    } else if (request.name) {
      recette = await this.appService.findByName(request.name);
      return { recettes: [recette] };
    } else {
      recettes = await this.appService.findAll();
      return { recettes };
    }
  }

  async update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> {
    const nutrition = await firstValueFrom<NutritionGetResponse>(this.grpcNutritionService.get({ id: request.nutritionId }));
    if (!nutrition) {
      throw new Error(`La nutrition avec l'ID ${request.nutritionId} n'existe pas.`);
    }

    const recette = await this.appService.update(request.id, {
      name: request.name,
      description: request.description,
      note: request.note,
      nutritionId: request.nutritionId
    });
    return { recette };
  }

  async delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> {
    const recette = await this.appService.delete(request.id);
    return { recette };
  }

  /*
  async add(request: AddRequest): Promise<AddResponse> {
    const createdRecette = await this.appService.create({
      name: request.name,
      description: request.description,
      note: request.note,
      nutritionId: request.nutritionId
    });
    return { recette: createdRecette };
  }
  */
  
  

async add(request: AddRequest): Promise<AddResponse> {
  const nutrition = await firstValueFrom<NutritionGetResponse>(this.grpcNutritionService.get({ id: request.nutritionId }));
  if (!nutrition) {
    throw new Error(`La nutrition avec l'ID ${request.nutritionId} n'existe pas.`);
  }
  
  const createdRecette = await this.appService.create({
    name: request.name,
    description: request.description,
    note: request.note,
    nutritionId: request.nutritionId
  });
  return { recette: createdRecette };
}

  
}