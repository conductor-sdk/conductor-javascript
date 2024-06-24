/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { EnumValueOptions } from './EnumValueOptions';
import type { EnumValueOptionsOrBuilder } from './EnumValueOptionsOrBuilder';
import type { ParserEnumValueDescriptorProto } from './ParserEnumValueDescriptorProto';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type EnumValueDescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: EnumValueDescriptorProto;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  name?: string;
  nameBytes?: ByteString;
  number?: number;
  options?: EnumValueOptions;
  optionsOrBuilder?: EnumValueOptionsOrBuilder;
  parserForType?: ParserEnumValueDescriptorProto;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

