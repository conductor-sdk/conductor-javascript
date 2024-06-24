/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { EnumDescriptor } from './EnumDescriptor';
import type { FieldDescriptor } from './FieldDescriptor';
import type { FileDescriptorProto } from './FileDescriptorProto';
import type { FileOptions } from './FileOptions';
import type { ServiceDescriptor } from './ServiceDescriptor';
export type FileDescriptor = {
  dependencies?: Array<FileDescriptor>;
  enumTypes?: Array<EnumDescriptor>;
  extensions?: Array<FieldDescriptor>;
  file?: FileDescriptor;
  fullName?: string;
  messageTypes?: Array<Descriptor>;
  name?: string;
  options?: FileOptions;
  package?: string;
  proto?: FileDescriptorProto;
  publicDependencies?: Array<FileDescriptor>;
  services?: Array<ServiceDescriptor>;
  /**
   * @deprecated
   */
  syntax?: 'UNKNOWN' | 'PROTO2' | 'PROTO3';
};

