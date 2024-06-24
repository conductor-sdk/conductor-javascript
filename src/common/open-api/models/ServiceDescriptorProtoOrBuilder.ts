/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { MethodDescriptorProto } from './MethodDescriptorProto';
import type { MethodDescriptorProtoOrBuilder } from './MethodDescriptorProtoOrBuilder';
import type { ServiceOptions } from './ServiceOptions';
import type { ServiceOptionsOrBuilder } from './ServiceOptionsOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ServiceDescriptorProtoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  methodCount?: number;
  methodList?: Array<MethodDescriptorProto>;
  methodOrBuilderList?: Array<MethodDescriptorProtoOrBuilder>;
  name?: string;
  nameBytes?: ByteString;
  options?: ServiceOptions;
  optionsOrBuilder?: ServiceOptionsOrBuilder;
  unknownFields?: UnknownFieldSet;
};

