/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { ParserDeclaration } from './ParserDeclaration';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type Declaration = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Declaration;
  descriptorForType?: Descriptor;
  fullName?: string;
  fullNameBytes?: ByteString;
  initializationErrorString?: string;
  initialized?: boolean;
  /**
   * @deprecated
   */
  isRepeated?: boolean;
  memoizedSerializedSize?: number;
  number?: number;
  parserForType?: ParserDeclaration;
  repeated?: boolean;
  reserved?: boolean;
  serializedSize?: number;
  type?: string;
  typeBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
};

