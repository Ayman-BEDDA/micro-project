/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "recette.v1alpha";

export interface Recette {
  id?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  note?: string | undefined;
  nutritionId?: number | undefined;
}

export interface GetRequest {
  id?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  note?: string | undefined;
  nutritionId?: number | undefined;
}

export interface GetResponse {
  recettes?: Recette[] | undefined;
}

export interface AddRequest {
  name?: string | undefined;
  description?: string | undefined;
  note?: string | undefined;
  nutritionId?: number | undefined;
}

export interface AddResponse {
  recette?: Recette | undefined;
}

export interface UpdateRequest {
  id?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  note?: string | undefined;
  nutritionId?: number | undefined;
}

export interface UpdateResponse {
  recette?: Recette | undefined;
}

export interface DeleteRequest {
  id?: number | undefined;
}

export interface DeleteResponse {
  recette?: Recette | undefined;
}

export const RECETTE_V1ALPHA_PACKAGE_NAME = "recette.v1alpha";

export interface RecetteCRUDServiceClient {
  get(request: GetRequest, metadata?: Metadata): Observable<GetResponse>;

  add(request: AddRequest, metadata?: Metadata): Observable<AddResponse>;

  update(request: UpdateRequest, metadata?: Metadata): Observable<UpdateResponse>;

  delete(request: DeleteRequest, metadata?: Metadata): Observable<DeleteResponse>;
}

export interface RecetteCRUDServiceController {
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

export function RecetteCRUDServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["get", "add", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("RecetteCRUDService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("RecetteCRUDService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RECETTE_CR_UD_SERVICE_NAME = "RecetteCRUDService";
