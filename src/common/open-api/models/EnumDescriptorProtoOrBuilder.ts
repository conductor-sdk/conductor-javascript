/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { EnumOptions } from './EnumOptions';
import type { EnumOptionsOrBuilder } from './EnumOptionsOrBuilder';
import type { EnumReservedRange } from './EnumReservedRange';
import type { EnumReservedRangeOrBuilder } from './EnumReservedRangeOrBuilder';
import type { EnumValueDescriptorProto } from './EnumValueDescriptorProto';
import type { EnumValueDescriptorProtoOrBuilder } from './EnumValueDescriptorProtoOrBuilder';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type EnumDescriptorProtoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  name?: string;
  nameBytes?: ByteString;
  options?: EnumOptions;
  optionsOrBuilder?: EnumOptionsOrBuilder;
  reservedNameCount?: number;
  reservedNameList?: Array<string>;
  reservedRangeCount?: number;
  reservedRangeList?: Array<EnumReservedRange>;
  reservedRangeOrBuilderList?: Array<EnumReservedRangeOrBuilder>;
  unknownFields?: UnknownFieldSet;
  valueCount?: number;
  valueList?: Array<EnumValueDescriptorProto>;
  valueOrBuilderList?: Array<EnumValueDescriptorProtoOrBuilder>;
};

