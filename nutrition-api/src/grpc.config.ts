import { GrpcOptions, Transport } from '@nestjs/microservices';
import { NUTRITION_V1ALPHA_PACKAGE_NAME } from './stubs/nutrition/v1alpha/nutrition';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
export const grpcConfig = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:7000',
    package: NUTRITION_V1ALPHA_PACKAGE_NAME,
    protoPath: join(__dirname, 'proto/nutrition/v1alpha/nutrition.proto'),
  },
}) as GrpcOptions;
