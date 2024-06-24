/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { FieldDescriptor } from './FieldDescriptor';
import type { FileDescriptor } from './FileDescriptor';
import type { OneofDescriptorProto } from './OneofDescriptorProto';
import type { OneofOptions } from './OneofOptions';
export type OneofDescriptor = {
  containingType?: Descriptor;
  fieldCount?: number;
  fields?: Array<FieldDescriptor>;
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  name?: string;
  options?: OneofOptions;
  proto?: OneofDescriptorProto;
  synthetic?: boolean;
};

