/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "nutrition.v1alpha";

export interface Nutrition {
  id?: number | undefined;
  name?: string | undefined;
  calories?: number | undefined;
  proteines?: number | undefined;
  lipides?: number | undefined;
  glucides?: number | undefined;
  fibres?: number | undefined;
  vitamines?: string | undefined;
  mineraux?: string | undefined;
  allergenes?: string | undefined;
}

export interface GetRequest {
  id?: number | undefined;
  name?: string | undefined;
}

export interface GetResponse {
  nutritions?: Nutrition[] | undefined;
}

export interface AddRequest {
  name?: string | undefined;
  calories?: number | undefined;
  proteines?: number | undefined;
  lipides?: number | undefined;
  glucides?: number | undefined;
  fibres?: number | undefined;
  vitamines?: string | undefined;
  mineraux?: string | undefined;
  allergenes?: string | undefined;
}

export interface AddResponse {
  nutrition?: Nutrition | undefined;
}

export interface UpdateRequest {
  id?: number | undefined;
  name?: string | undefined;
  calories?: number | undefined;
  proteines?: number | undefined;
  lipides?: number | undefined;
  glucides?: number | undefined;
  fibres?: number | undefined;
  vitamines?: string | undefined;
  mineraux?: string | undefined;
  allergenes?: string | undefined;
}

export interface UpdateResponse {
  nutrition?: Nutrition | undefined;
}

export interface DeleteRequest {
  id?: number | undefined;
}

export interface DeleteResponse {
  nutrition?: Nutrition | undefined;
}

export const NUTRITION_V1ALPHA_PACKAGE_NAME = "nutrition.v1alpha";

export interface NutritionCRUDServiceClient {
  get(request: GetRequest, metadata?: Metadata): Observable<GetResponse>;

  add(request: AddRequest, metadata?: Metadata): Observable<AddResponse>;

  update(request: UpdateRequest, metadata?: Metadata): Observable<UpdateResponse>;

  delete(request: DeleteRequest, metadata?: Metadata): Observable<DeleteResponse>;
}

export interface NutritionCRUDServiceController {
  get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> | Observable<GetResponse> | GetResponse;

  add(request: AddRequest, metadata?: Metadata): Promise<AddResponse> | Observable<AddResponse> | AddResponse;

  update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> | Observable<UpdateResponse> | UpdateResponse;

  delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> | Observable<DeleteResponse> | DeleteResponse;
}

export function NutritionCRUDServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["get", "add", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("NutritionCRUDService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("NutritionCRUDService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const NUTRITION_CR_UD_SERVICE_NAME = "NutritionCRUDService";
