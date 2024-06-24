/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { MessageLite } from './MessageLite';
import type { ParserMessage } from './ParserMessage';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type Message = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: MessageLite;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  parserForType?: ParserMessage;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

