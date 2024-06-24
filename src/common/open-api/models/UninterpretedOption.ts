/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { NamePart } from './NamePart';
import type { NamePartOrBuilder } from './NamePartOrBuilder';
import type { ParserUninterpretedOption } from './ParserUninterpretedOption';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type UninterpretedOption = {
  aggregateValue?: string;
  aggregateValueBytes?: ByteString;
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: UninterpretedOption;
  descriptorForType?: Descriptor;
  doubleValue?: number;
  identifierValue?: string;
  identifierValueBytes?: ByteString;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  nameCount?: number;
  nameList?: Array<NamePart>;
  nameOrBuilderList?: Array<NamePartOrBuilder>;
  negativeIntValue?: number;
  parserForType?: ParserUninterpretedOption;
  positiveIntValue?: number;
  serializedSize?: number;
  stringValue?: ByteString;
  unknownFields?: UnknownFieldSet;
};

