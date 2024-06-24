/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDescriptor } from './FileDescriptor';
import type { MethodDescriptor } from './MethodDescriptor';
import type { ServiceDescriptorProto } from './ServiceDescriptorProto';
import type { ServiceOptions } from './ServiceOptions';
export type ServiceDescriptor = {
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  methods?: Array<MethodDescriptor>;
  name?: string;
  options?: ServiceOptions;
  proto?: ServiceDescriptorProto;
};

