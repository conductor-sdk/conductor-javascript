/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { ExtensionRangeOptions } from './ExtensionRangeOptions';
import type { ExtensionRangeOptionsOrBuilder } from './ExtensionRangeOptionsOrBuilder';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ExtensionRangeOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  end?: number;
  initializationErrorString?: string;
  initialized?: boolean;
  options?: ExtensionRangeOptions;
  optionsOrBuilder?: ExtensionRangeOptionsOrBuilder;
  start?: number;
  unknownFields?: UnknownFieldSet;
};

