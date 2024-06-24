/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { NamePart } from './NamePart';
import type { NamePartOrBuilder } from './NamePartOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type UninterpretedOptionOrBuilder = {
  aggregateValue?: string;
  aggregateValueBytes?: ByteString;
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  doubleValue?: number;
  identifierValue?: string;
  identifierValueBytes?: ByteString;
  initializationErrorString?: string;
  initialized?: boolean;
  nameCount?: number;
  nameList?: Array<NamePart>;
  nameOrBuilderList?: Array<NamePartOrBuilder>;
  negativeIntValue?: number;
  positiveIntValue?: number;
  stringValue?: ByteString;
  unknownFields?: UnknownFieldSet;
};

