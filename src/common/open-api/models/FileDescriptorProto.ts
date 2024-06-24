/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { DescriptorProto } from './DescriptorProto';
import type { DescriptorProtoOrBuilder } from './DescriptorProtoOrBuilder';
import type { EnumDescriptorProto } from './EnumDescriptorProto';
import type { EnumDescriptorProtoOrBuilder } from './EnumDescriptorProtoOrBuilder';
import type { FieldDescriptorProto } from './FieldDescriptorProto';
import type { FieldDescriptorProtoOrBuilder } from './FieldDescriptorProtoOrBuilder';
import type { FileOptions } from './FileOptions';
import type { FileOptionsOrBuilder } from './FileOptionsOrBuilder';
import type { ParserFileDescriptorProto } from './ParserFileDescriptorProto';
import type { ServiceDescriptorProto } from './ServiceDescriptorProto';
import type { ServiceDescriptorProtoOrBuilder } from './ServiceDescriptorProtoOrBuilder';
import type { SourceCodeInfo } from './SourceCodeInfo';
import type { SourceCodeInfoOrBuilder } from './SourceCodeInfoOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type FileDescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: FileDescriptorProto;
  dependencyCount?: number;
  dependencyList?: Array<string>;
  descriptorForType?: Descriptor;
  edition?: string;
  editionBytes?: ByteString;
  enumTypeCount?: number;
  enumTypeList?: Array<EnumDescriptorProto>;
  enumTypeOrBuilderList?: Array<EnumDescriptorProtoOrBuilder>;
  extensionCount?: number;
  extensionList?: Array<FieldDescriptorProto>;
  extensionOrBuilderList?: Array<FieldDescriptorProtoOrBuilder>;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  messageTypeCount?: number;
  messageTypeList?: Array<DescriptorProto>;
  messageTypeOrBuilderList?: Array<DescriptorProtoOrBuilder>;
  name?: string;
  nameBytes?: ByteString;
  options?: FileOptions;
  optionsOrBuilder?: FileOptionsOrBuilder;
  package?: string;
  packageBytes?: ByteString;
  parserForType?: ParserFileDescriptorProto;
  publicDependencyCount?: number;
  publicDependencyList?: Array<number>;
  serializedSize?: number;
  serviceCount?: number;
  serviceList?: Array<ServiceDescriptorProto>;
  serviceOrBuilderList?: Array<ServiceDescriptorProtoOrBuilder>;
  sourceCodeInfo?: SourceCodeInfo;
  sourceCodeInfoOrBuilder?: SourceCodeInfoOrBuilder;
  syntax?: string;
  syntaxBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
  weakDependencyCount?: number;
  weakDependencyList?: Array<number>;
};

