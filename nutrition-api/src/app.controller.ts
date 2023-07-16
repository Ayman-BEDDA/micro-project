import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  AddRequest,
  AddResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  NUTRITION_CR_UD_SERVICE_NAME,
  Nutrition,
  NutritionCRUDServiceController,
  UpdateRequest,
  UpdateResponse,
  NutritionCRUDServiceControllerMethods,
} from './stubs/nutrition/v1alpha/nutrition';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
import {Prisma} from '@prisma/client';

@Controller()
@NutritionCRUDServiceControllerMethods()
export class AppController implements NutritionCRUDServiceController {
  constructor(private readonly appService: AppService) {}
  
  @GrpcMethod(NUTRITION_CR_UD_SERVICE_NAME)
  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let nutrition: Nutrition;
    let nutritions: Nutrition[] = [];
    if (request.id) {
      nutrition = await this.appService.findById(request.id);
      return { nutritions: [nutrition] };
    } else if (request.name) {
      nutrition = await this.appService.findByName(request.name);
      return { nutritions: [nutrition] };
    } else {
      nutritions = await this.appService.findAll();
      return { nutritions };
    }
  }

  async update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> {
    const nutrition = await this.appService.update(request.id, {
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
    return { nutrition };
  }

  async delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> {
    const nutrition = await this.appService.delete(request.id);
    return { nutrition };
  }

  @GrpcMethod(NUTRITION_CR_UD_SERVICE_NAME)
	async add(request: AddRequest): Promise<AddResponse> {
	  const createdNutrition = await this.appService.create({
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
    return { nutrition: createdNutrition };
	}
}