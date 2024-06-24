/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DescriptorProto } from './DescriptorProto';
import type { EnumDescriptor } from './EnumDescriptor';
import type { FieldDescriptor } from './FieldDescriptor';
import type { FileDescriptor } from './FileDescriptor';
import type { MessageOptions } from './MessageOptions';
import type { OneofDescriptor } from './OneofDescriptor';
export type Descriptor = {
  containingType?: Descriptor;
  enumTypes?: Array<EnumDescriptor>;
  extendable?: boolean;
  extensions?: Array<FieldDescriptor>;
  fields?: Array<FieldDescriptor>;
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  name?: string;
  nestedTypes?: Array<Descriptor>;
  oneofs?: Array<OneofDescriptor>;
  options?: MessageOptions;
  proto?: DescriptorProto;
  realOneofs?: Array<OneofDescriptor>;
};

