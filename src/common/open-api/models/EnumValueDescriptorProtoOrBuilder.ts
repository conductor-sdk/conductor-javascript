/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { EnumValueOptions } from './EnumValueOptions';
import type { EnumValueOptionsOrBuilder } from './EnumValueOptionsOrBuilder';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type EnumValueDescriptorProtoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  name?: string;
  nameBytes?: ByteString;
  number?: number;
  options?: EnumValueOptions;
  optionsOrBuilder?: EnumValueOptionsOrBuilder;
  unknownFields?: UnknownFieldSet;
};

