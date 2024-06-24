/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserServiceOptions } from './ParserServiceOptions';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ServiceOptions = {
  allFields?: Record<string, Record<string, any>>;
  allFieldsRaw?: Record<string, Record<string, any>>;
  defaultInstanceForType?: ServiceOptions;
  deprecated?: boolean;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserServiceOptions;
  serializedSize?: number;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

