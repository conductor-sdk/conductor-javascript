/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnumDescriptor } from './EnumDescriptor';
import type { EnumValueDescriptorProto } from './EnumValueDescriptorProto';
import type { EnumValueOptions } from './EnumValueOptions';
import type { FileDescriptor } from './FileDescriptor';
export type EnumValueDescriptor = {
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  name?: string;
  number?: number;
  options?: EnumValueOptions;
  proto?: EnumValueDescriptorProto;
  type?: EnumDescriptor;
};

