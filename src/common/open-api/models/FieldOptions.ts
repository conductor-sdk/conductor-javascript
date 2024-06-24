/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserFieldOptions } from './ParserFieldOptions';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type FieldOptions = {
  allFields?: Record<string, Record<string, any>>;
  allFieldsRaw?: Record<string, Record<string, any>>;
  ctype?: 'STRING' | 'CORD' | 'STRING_PIECE';
  debugRedact?: boolean;
  defaultInstanceForType?: FieldOptions;
  deprecated?: boolean;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  jstype?: 'JS_NORMAL' | 'JS_STRING' | 'JS_NUMBER';
  lazy?: boolean;
  memoizedSerializedSize?: number;
  packed?: boolean;
  parserForType?: ParserFieldOptions;
  retention?: 'RETENTION_UNKNOWN' | 'RETENTION_RUNTIME' | 'RETENTION_SOURCE';
  serializedSize?: number;
  /**
   * @deprecated
   */
  target?: 'TARGET_TYPE_UNKNOWN' | 'TARGET_TYPE_FILE' | 'TARGET_TYPE_EXTENSION_RANGE' | 'TARGET_TYPE_MESSAGE' | 'TARGET_TYPE_FIELD' | 'TARGET_TYPE_ONEOF' | 'TARGET_TYPE_ENUM' | 'TARGET_TYPE_ENUM_ENTRY' | 'TARGET_TYPE_SERVICE' | 'TARGET_TYPE_METHOD';
  targetsCount?: number;
  targetsList?: Array<'TARGET_TYPE_UNKNOWN' | 'TARGET_TYPE_FILE' | 'TARGET_TYPE_EXTENSION_RANGE' | 'TARGET_TYPE_MESSAGE' | 'TARGET_TYPE_FIELD' | 'TARGET_TYPE_ONEOF' | 'TARGET_TYPE_ENUM' | 'TARGET_TYPE_ENUM_ENTRY' | 'TARGET_TYPE_SERVICE' | 'TARGET_TYPE_METHOD'>;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
  unverifiedLazy?: boolean;
  weak?: boolean;
};

