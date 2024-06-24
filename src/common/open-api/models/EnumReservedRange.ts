/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserEnumReservedRange } from './ParserEnumReservedRange';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type EnumReservedRange = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: EnumReservedRange;
  descriptorForType?: Descriptor;
  end?: number;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserEnumReservedRange;
  serializedSize?: number;
  start?: number;
  unknownFields?: UnknownFieldSet;
};

