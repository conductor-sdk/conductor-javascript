/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ParserReservedRange } from './ParserReservedRange';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ReservedRange = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: ReservedRange;
  descriptorForType?: Descriptor;
  end?: number;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserReservedRange;
  serializedSize?: number;
  start?: number;
  unknownFields?: UnknownFieldSet;
};

