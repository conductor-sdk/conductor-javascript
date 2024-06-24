/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { MethodDescriptorProto } from './MethodDescriptorProto';
import type { MethodDescriptorProtoOrBuilder } from './MethodDescriptorProtoOrBuilder';
import type { ParserServiceDescriptorProto } from './ParserServiceDescriptorProto';
import type { ServiceOptions } from './ServiceOptions';
import type { ServiceOptionsOrBuilder } from './ServiceOptionsOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ServiceDescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: ServiceDescriptorProto;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  methodCount?: number;
  methodList?: Array<MethodDescriptorProto>;
  methodOrBuilderList?: Array<MethodDescriptorProtoOrBuilder>;
  name?: string;
  nameBytes?: ByteString;
  options?: ServiceOptions;
  optionsOrBuilder?: ServiceOptionsOrBuilder;
  parserForType?: ParserServiceDescriptorProto;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

