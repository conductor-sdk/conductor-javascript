/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { FieldOptions } from './FieldOptions';
import type { FieldOptionsOrBuilder } from './FieldOptionsOrBuilder';
import type { ParserFieldDescriptorProto } from './ParserFieldDescriptorProto';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type FieldDescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: FieldDescriptorProto;
  defaultValue?: string;
  defaultValueBytes?: ByteString;
  descriptorForType?: Descriptor;
  extendee?: string;
  extendeeBytes?: ByteString;
  initializationErrorString?: string;
  initialized?: boolean;
  jsonName?: string;
  jsonNameBytes?: ByteString;
  label?: 'LABEL_OPTIONAL' | 'LABEL_REQUIRED' | 'LABEL_REPEATED';
  memoizedSerializedSize?: number;
  name?: string;
  nameBytes?: ByteString;
  number?: number;
  oneofIndex?: number;
  options?: FieldOptions;
  optionsOrBuilder?: FieldOptionsOrBuilder;
  parserForType?: ParserFieldDescriptorProto;
  proto3Optional?: boolean;
  serializedSize?: number;
  type?: 'TYPE_DOUBLE' | 'TYPE_FLOAT' | 'TYPE_INT64' | 'TYPE_UINT64' | 'TYPE_INT32' | 'TYPE_FIXED64' | 'TYPE_FIXED32' | 'TYPE_BOOL' | 'TYPE_STRING' | 'TYPE_GROUP' | 'TYPE_MESSAGE' | 'TYPE_BYTES' | 'TYPE_UINT32' | 'TYPE_ENUM' | 'TYPE_SFIXED32' | 'TYPE_SFIXED64' | 'TYPE_SINT32' | 'TYPE_SINT64';
  typeName?: string;
  typeNameBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
};
