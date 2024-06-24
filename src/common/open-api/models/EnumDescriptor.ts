/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { EnumDescriptorProto } from './EnumDescriptorProto';
import type { EnumOptions } from './EnumOptions';
import type { EnumValueDescriptor } from './EnumValueDescriptor';
import type { FileDescriptor } from './FileDescriptor';
export type EnumDescriptor = {
  closed?: boolean;
  containingType?: Descriptor;
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  name?: string;
  options?: EnumOptions;
  proto?: EnumDescriptorProto;
  values?: Array<EnumValueDescriptor>;
};

