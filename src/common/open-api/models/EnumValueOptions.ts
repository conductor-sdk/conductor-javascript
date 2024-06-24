/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserEnumValueOptions } from './ParserEnumValueOptions';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type EnumValueOptions = {
  allFields?: Record<string, Record<string, any>>;
  allFieldsRaw?: Record<string, Record<string, any>>;
  defaultInstanceForType?: EnumValueOptions;
  deprecated?: boolean;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserEnumValueOptions;
  serializedSize?: number;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

