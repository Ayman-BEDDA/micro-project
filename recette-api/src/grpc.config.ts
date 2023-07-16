import {
	ClientProviderOptions,
	GrpcOptions,
	Transport,
	ClientOptions
} from '@nestjs/microservices';
import { RECETTE_V1ALPHA_PACKAGE_NAME } from './stubs/recette/v1alpha/recette';
import {NUTRITION_V1ALPHA_PACKAGE_NAME} from './stubs/nutrition/v1alpha/nutrition';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';

import { ConfigService } from '@nestjs/config';

export const grpcConfig = (cs: ConfigService): GrpcOptions =>
	addReflectionToGrpcConfig({
		transport: Transport.GRPC,
		options: {
			url: `0.0.0.0:7000`,
			package: RECETTE_V1ALPHA_PACKAGE_NAME,
			protoPath: join(__dirname, 'proto/recette/v1alpha/recette.proto'),
		},
	});

export const grpcNutrition: ClientOptions = {
	transport: Transport.GRPC,
	options: {
		url: `0.0.0.0:8000`,
		package: NUTRITION_V1ALPHA_PACKAGE_NAME,
		protoPath: join(__dirname, 'proto/nutrition/v1alpha/nutrition.proto'),
	},
};