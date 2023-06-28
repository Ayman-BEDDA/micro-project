// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "recette/v1alpha/recette.proto" (package "hero.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { HeroCRUDService } from "./recette";
import type { DeleteResponse } from "./recette";
import type { DeleteRequest } from "./recette";
import type { UpdateResponse } from "./recette";
import type { UpdateRequest } from "./recette";
import type { AddResponse } from "./recette";
import type { AddRequest } from "./recette";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetResponse } from "./recette";
import type { GetRequest } from "./recette";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hero.v1alpha.HeroCRUDService
 */
export interface IHeroCRUDServiceClient {
    /**
     * @generated from protobuf rpc: Get(hero.v1alpha.GetRequest) returns (hero.v1alpha.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: Add(hero.v1alpha.AddRequest) returns (hero.v1alpha.AddResponse);
     */
    add(input: AddRequest, options?: RpcOptions): UnaryCall<AddRequest, AddResponse>;
    /**
     * @generated from protobuf rpc: Update(hero.v1alpha.UpdateRequest) returns (hero.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse>;
    /**
     * @generated from protobuf rpc: Delete(hero.v1alpha.DeleteRequest) returns (hero.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
}
/**
 * @generated from protobuf service hero.v1alpha.HeroCRUDService
 */
export class HeroCRUDServiceClient implements IHeroCRUDServiceClient, ServiceInfo {
    typeName = HeroCRUDService.typeName;
    methods = HeroCRUDService.methods;
    options = HeroCRUDService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Get(hero.v1alpha.GetRequest) returns (hero.v1alpha.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetRequest, GetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Add(hero.v1alpha.AddRequest) returns (hero.v1alpha.AddResponse);
     */
    add(input: AddRequest, options?: RpcOptions): UnaryCall<AddRequest, AddResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddRequest, AddResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(hero.v1alpha.UpdateRequest) returns (hero.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateRequest, UpdateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(hero.v1alpha.DeleteRequest) returns (hero.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRequest, DeleteResponse>("unary", this._transport, method, opt, input);
    }
}
