/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ExtensionRangeOptions } from './ExtensionRangeOptions';
import type { ExtensionRangeOptionsOrBuilder } from './ExtensionRangeOptionsOrBuilder';
import type { ParserExtensionRange } from './ParserExtensionRange';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ExtensionRange = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: ExtensionRange;
  descriptorForType?: Descriptor;
  end?: number;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  options?: ExtensionRangeOptions;
  optionsOrBuilder?: ExtensionRangeOptionsOrBuilder;
  parserForType?: ParserExtensionRange;
  serializedSize?: number;
  start?: number;
  unknownFields?: UnknownFieldSet;
};

