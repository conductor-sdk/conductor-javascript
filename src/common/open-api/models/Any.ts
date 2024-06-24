/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { ParserAny } from './ParserAny';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type Any = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Any;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  memoizedSerializedSize?: number;
  parserForType?: ParserAny;
  serializedSize?: number;
  typeUrl?: string;
  typeUrlBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
  value?: ByteString;
};

