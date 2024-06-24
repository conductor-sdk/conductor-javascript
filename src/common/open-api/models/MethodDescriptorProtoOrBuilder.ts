/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { MethodOptions } from './MethodOptions';
import type { MethodOptionsOrBuilder } from './MethodOptionsOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type MethodDescriptorProtoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  clientStreaming?: boolean;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  inputType?: string;
  inputTypeBytes?: ByteString;
  name?: string;
  nameBytes?: ByteString;
  options?: MethodOptions;
  optionsOrBuilder?: MethodOptionsOrBuilder;
  outputType?: string;
  outputTypeBytes?: ByteString;
  serverStreaming?: boolean;
  unknownFields?: UnknownFieldSet;
};

