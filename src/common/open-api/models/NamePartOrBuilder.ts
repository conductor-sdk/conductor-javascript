/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type NamePartOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  isExtension?: boolean;
  namePart?: string;
  namePartBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
};

