/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserMethodOptions } from './ParserMethodOptions';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type MethodOptions = {
  allFields?: Record<string, Record<string, any>>;
  allFieldsRaw?: Record<string, Record<string, any>>;
  defaultInstanceForType?: MethodOptions;
  deprecated?: boolean;
  descriptorForType?: Descriptor;
  idempotencyLevel?: 'IDEMPOTENCY_UNKNOWN' | 'NO_SIDE_EFFECTS' | 'IDEMPOTENT';
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserMethodOptions;
  serializedSize?: number;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

