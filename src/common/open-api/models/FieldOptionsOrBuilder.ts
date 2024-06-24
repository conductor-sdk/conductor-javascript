/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type FieldOptionsOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  ctype?: 'STRING' | 'CORD' | 'STRING_PIECE';
  debugRedact?: boolean;
  defaultInstanceForType?: Message;
  deprecated?: boolean;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  jstype?: 'JS_NORMAL' | 'JS_STRING' | 'JS_NUMBER';
  lazy?: boolean;
  packed?: boolean;
  retention?: 'RETENTION_UNKNOWN' | 'RETENTION_RUNTIME' | 'RETENTION_SOURCE';
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

