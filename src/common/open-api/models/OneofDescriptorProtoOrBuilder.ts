/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { OneofOptions } from './OneofOptions';
import type { OneofOptionsOrBuilder } from './OneofOptionsOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type OneofDescriptorProtoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  name?: string;
  nameBytes?: ByteString;
  options?: OneofOptions;
  optionsOrBuilder?: OneofOptionsOrBuilder;
  unknownFields?: UnknownFieldSet;
};

