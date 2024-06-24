/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { EnumDescriptorProto } from './EnumDescriptorProto';
import type { EnumDescriptorProtoOrBuilder } from './EnumDescriptorProtoOrBuilder';
import type { ExtensionRange } from './ExtensionRange';
import type { ExtensionRangeOrBuilder } from './ExtensionRangeOrBuilder';
import type { FieldDescriptorProto } from './FieldDescriptorProto';
import type { FieldDescriptorProtoOrBuilder } from './FieldDescriptorProtoOrBuilder';
import type { Message } from './Message';
import type { MessageOptions } from './MessageOptions';
import type { MessageOptionsOrBuilder } from './MessageOptionsOrBuilder';
import type { OneofDescriptorProto } from './OneofDescriptorProto';
import type { OneofDescriptorProtoOrBuilder } from './OneofDescriptorProtoOrBuilder';
import type { ReservedRange } from './ReservedRange';
import type { ReservedRangeOrBuilder } from './ReservedRangeOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type DescriptorProtoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  enumTypeCount?: number;
  enumTypeList?: Array<EnumDescriptorProto>;
  enumTypeOrBuilderList?: Array<EnumDescriptorProtoOrBuilder>;
  extensionCount?: number;
  extensionList?: Array<FieldDescriptorProto>;
  extensionOrBuilderList?: Array<FieldDescriptorProtoOrBuilder>;
  extensionRangeCount?: number;
  extensionRangeList?: Array<ExtensionRange>;
  extensionRangeOrBuilderList?: Array<ExtensionRangeOrBuilder>;
  fieldCount?: number;
  fieldList?: Array<FieldDescriptorProto>;
  fieldOrBuilderList?: Array<FieldDescriptorProtoOrBuilder>;
  initializationErrorString?: string;
  initialized?: boolean;
  name?: string;
  nameBytes?: ByteString;
  nestedTypeCount?: number;
  oneofDeclCount?: number;
  oneofDeclList?: Array<OneofDescriptorProto>;
  oneofDeclOrBuilderList?: Array<OneofDescriptorProtoOrBuilder>;
  options?: MessageOptions;
  optionsOrBuilder?: MessageOptionsOrBuilder;
  reservedNameCount?: number;
  reservedNameList?: Array<string>;
  reservedRangeCount?: number;
  reservedRangeList?: Array<ReservedRange>;
  reservedRangeOrBuilderList?: Array<ReservedRangeOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

