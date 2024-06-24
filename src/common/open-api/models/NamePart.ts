/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { ParserNamePart } from './ParserNamePart';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type NamePart = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: NamePart;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  isExtension?: boolean;
  memoizedSerializedSize?: number;
  namePart?: string;
  namePartBytes?: ByteString;
  parserForType?: ParserNamePart;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

