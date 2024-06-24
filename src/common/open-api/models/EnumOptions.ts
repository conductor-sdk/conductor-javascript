/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserEnumOptions } from './ParserEnumOptions';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type EnumOptions = {
  allFields?: Record<string, Record<string, any>>;
  allFieldsRaw?: Record<string, Record<string, any>>;
  allowAlias?: boolean;
  defaultInstanceForType?: EnumOptions;
  deprecated?: boolean;
  /**
   * @deprecated
   */
  deprecatedLegacyJsonFieldConflicts?: boolean;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserEnumOptions;
  serializedSize?: number;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

