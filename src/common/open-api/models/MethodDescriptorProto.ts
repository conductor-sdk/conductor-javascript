/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { MethodOptions } from './MethodOptions';
import type { MethodOptionsOrBuilder } from './MethodOptionsOrBuilder';
import type { ParserMethodDescriptorProto } from './ParserMethodDescriptorProto';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type MethodDescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  clientStreaming?: boolean;
  defaultInstanceForType?: MethodDescriptorProto;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  inputType?: string;
  inputTypeBytes?: ByteString;
  memoizedSerializedSize?: number;
  name?: string;
  nameBytes?: ByteString;
  options?: MethodOptions;
  optionsOrBuilder?: MethodOptionsOrBuilder;
  outputType?: string;
  outputTypeBytes?: ByteString;
  parserForType?: ParserMethodDescriptorProto;
  serializedSize?: number;
  serverStreaming?: boolean;
  unknownFields?: UnknownFieldSet;
};

