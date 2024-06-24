/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type DeclarationOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  fullName?: string;
  fullNameBytes?: ByteString;
  initializationErrorString?: string;
  initialized?: boolean;
  /**
   * @deprecated
   */
  isRepeated?: boolean;
  number?: number;
  repeated?: boolean;
  reserved?: boolean;
  type?: string;
  typeBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
};

