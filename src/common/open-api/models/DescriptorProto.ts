/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { DescriptorProtoOrBuilder } from './DescriptorProtoOrBuilder';
import type { EnumDescriptorProto } from './EnumDescriptorProto';
import type { EnumDescriptorProtoOrBuilder } from './EnumDescriptorProtoOrBuilder';
import type { ExtensionRange } from './ExtensionRange';
import type { ExtensionRangeOrBuilder } from './ExtensionRangeOrBuilder';
import type { FieldDescriptorProto } from './FieldDescriptorProto';
import type { FieldDescriptorProtoOrBuilder } from './FieldDescriptorProtoOrBuilder';
import type { MessageOptions } from './MessageOptions';
import type { MessageOptionsOrBuilder } from './MessageOptionsOrBuilder';
import type { OneofDescriptorProto } from './OneofDescriptorProto';
import type { OneofDescriptorProtoOrBuilder } from './OneofDescriptorProtoOrBuilder';
import type { ParserDescriptorProto } from './ParserDescriptorProto';
import type { ReservedRange } from './ReservedRange';
import type { ReservedRangeOrBuilder } from './ReservedRangeOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type DescriptorProto = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: DescriptorProto;
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
  memoizedSerializedSize?: number;
  name?: string;
  nameBytes?: ByteString;
  nestedTypeCount?: number;
  nestedTypeList?: Array<DescriptorProto>;
  nestedTypeOrBuilderList?: Array<DescriptorProtoOrBuilder>;
  oneofDeclCount?: number;
  oneofDeclList?: Array<OneofDescriptorProto>;
  oneofDeclOrBuilderList?: Array<OneofDescriptorProtoOrBuilder>;
  options?: MessageOptions;
  optionsOrBuilder?: MessageOptionsOrBuilder;
  parserForType?: ParserDescriptorProto;
  reservedNameCount?: number;
  reservedNameList?: Array<string>;
  reservedRangeCount?: number;
  reservedRangeList?: Array<ReservedRange>;
  reservedRangeOrBuilderList?: Array<ReservedRangeOrBuilder>;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

