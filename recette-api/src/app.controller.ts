import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  AddRequest,
  AddResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  HERO_CR_UD_SERVICE_NAME,
  Recette,
  HeroCRUDServiceController,
  UpdateRequest,
  UpdateResponse,
  HeroCRUDServiceControllerMethods,
} from './stubs/recette/v1alpha/recette';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
@Controller()
@HeroCRUDServiceControllerMethods()
export class AppController implements HeroCRUDServiceController {
  constructor(private readonly appService: AppService) {}
  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let recette: Recette;
    if (request.id) {
      recette = await this.appService.findById(request.id);
    } else if (request.name) {
      recette = await this.appService.findByNom(request.name);
    }
    return { recette };
  }
  /*
  async update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> {
    const recette = await this.appService.update(
      request.recette.id,
      request.recette,
    );
    return { recette };
  }*/
  async delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> {
    const recette = await this.appService.delete(request.id);
    return { recette };
  }
  async add(request: AddRequest): Promise<AddResponse> {
    const recetteCreateInput = {
      name: request.recette.name,
      id: request.recette.id,
      recette: request.recette.recette.toString(), // Convertir en string
      ingredients: request.recette.ingredients,
    };

    const recette = await this.appService.create(recetteCreateInput);

    return { recette };
  }
}
