/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { OneofOptions } from './OneofOptions';
import type { OneofOptionsOrBuilder } from './OneofOptionsOrBuilder';
import type { ParserOneofDescriptorProto } from './ParserOneofDescriptorProto';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type OneofDescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: OneofDescriptorProto;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  name?: string;
  nameBytes?: ByteString;
  options?: OneofOptions;
  optionsOrBuilder?: OneofOptionsOrBuilder;
  parserForType?: ParserOneofDescriptorProto;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

