import {
	ClientProviderOptions,
	GrpcOptions,
	Transport,
} from '@nestjs/microservices';
import {NUTRITION_V1ALPHA_PACKAGE_NAME} from './stubs/nutrition/v1alpha/nutrition';
import {join} from 'path';
import {addReflectionToGrpcConfig} from 'nestjs-grpc-reflection';
import {ChannelCredentials} from '@grpc/grpc-js';
import {ConfigService} from '@nestjs/config';

export const grpcConfig = (cs: ConfigService): GrpcOptions =>
	addReflectionToGrpcConfig({
		transport: Transport.GRPC,
		options: {
			url: `0.0.0.0:8000`,
			package: NUTRITION_V1ALPHA_PACKAGE_NAME,
			protoPath: join(__dirname, 'proto/nutrition/v1alpha/nutrition.proto'),
		},
	});


/*
import {
ClientProviderOptions,
GrpcOptions,
Transport,
} from '@nestjs/microservices';
import {NUTRITION_V1ALPHA_PACKAGE_NAME, NUTRITION_CR_UD_SERVICE_NAME} from './stubs/nutrition/v1alpha/nutrition';
import {join} from 'path';
import {addReflectionToGrpcConfig} from 'nestjs-grpc-reflection';
import {ChannelCredentials, ServerCredentials} from '@grpc/grpc-js';
import {ConfigService} from '@nestjs/config';

export const nutritionGrpcOptions: ClientProviderOptions = {
name: NUTRITION_CR_UD_SERVICE_NAME,
transport: Transport.GRPC,
options: {
	url: `0.0.0.0:6000`,
	package: NUTRITION_V1ALPHA_PACKAGE_NAME,
	loader: {
		includeDirs: [join(__dirname, './proto')],
	},
	protoPath: join(__dirname, 'proto/nutrition/v1alpha/nutrition.proto'),
},
};
*/


