/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { EnumDescriptor } from './EnumDescriptor';
import type { FieldDescriptorProto } from './FieldDescriptorProto';
import type { FieldOptions } from './FieldOptions';
import type { FileDescriptor } from './FileDescriptor';
import type { OneofDescriptor } from './OneofDescriptor';
export type FieldDescriptor = {
  containingOneof?: OneofDescriptor;
  containingType?: Descriptor;
  defaultValue?: Record<string, any>;
  enumType?: EnumDescriptor;
  extension?: boolean;
  extensionScope?: Descriptor;
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  javaType?: 'INT' | 'LONG' | 'FLOAT' | 'DOUBLE' | 'BOOLEAN' | 'STRING' | 'BYTE_STRING' | 'ENUM' | 'MESSAGE';
  jsonName?: string;
  liteJavaType?: 'INT' | 'LONG' | 'FLOAT' | 'DOUBLE' | 'BOOLEAN' | 'STRING' | 'BYTE_STRING' | 'ENUM' | 'MESSAGE';
  liteType?: 'DOUBLE' | 'FLOAT' | 'INT64' | 'UINT64' | 'INT32' | 'FIXED64' | 'FIXED32' | 'BOOL' | 'STRING' | 'GROUP' | 'MESSAGE' | 'BYTES' | 'UINT32' | 'ENUM' | 'SFIXED32' | 'SFIXED64' | 'SINT32' | 'SINT64';
  mapField?: boolean;
  messageType?: Descriptor;
  name?: string;
  number?: number;
  optional?: boolean;
  options?: FieldOptions;
  packable?: boolean;
  packed?: boolean;
  proto?: FieldDescriptorProto;
  realContainingOneof?: OneofDescriptor;
  repeated?: boolean;
  required?: boolean;
  type?: 'DOUBLE' | 'FLOAT' | 'INT64' | 'UINT64' | 'INT32' | 'FIXED64' | 'FIXED32' | 'BOOL' | 'STRING' | 'GROUP' | 'MESSAGE' | 'BYTES' | 'UINT32' | 'ENUM' | 'SFIXED32' | 'SFIXED64' | 'SINT32' | 'SINT64';
};

