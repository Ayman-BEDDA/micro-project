import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
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
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
import { AppServiceNutrition } from '../../nutrition-api/src/app.service';
@Controller()
@RecetteCRUDServiceControllerMethods()
export class AppController implements RecetteCRUDServiceController {
  constructor(
    private readonly appService: AppService,
    private readonly nutritionAppService: AppServiceNutrition, // Injectez le service AppService du micro-service de nutrition
  ) {}
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
    const recette = await this.appService.update(request.id, {
      name: request.name,
      description: request.description,
      note: request.note,
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

  async add(request: AddRequest): Promise<AddResponse> {
    const createdRecette = await this.appService.create({
      name: request.name,
      description: request.description,
      note: request.note,
    });

    const createdNutrition = await this.nutritionAppService.create({
      name: request.name,
      calories: request.calories,
      proteines: request.proteines,
      lipides: request.lipides,
      glucides: request.glucides,
      fibres: request.fibres,
      vitamines: request.vitamines,
      mineraux: request.mineraux,
      allergenes: request.allergenes,
    });
    return { recette: createdRecette, nutrition: createdNutrition };
  }
}
