/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { FileDescriptor } from './FileDescriptor';
import type { MethodDescriptorProto } from './MethodDescriptorProto';
import type { MethodOptions } from './MethodOptions';
import type { ServiceDescriptor } from './ServiceDescriptor';
export type MethodDescriptor = {
  clientStreaming?: boolean;
  file?: FileDescriptor;
  fullName?: string;
  index?: number;
  inputType?: Descriptor;
  name?: string;
  options?: MethodOptions;
  outputType?: Descriptor;
  proto?: MethodDescriptorProto;
  serverStreaming?: boolean;
  service?: ServiceDescriptor;
};

