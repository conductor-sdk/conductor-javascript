/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { Location } from './Location';
import type { LocationOrBuilder } from './LocationOrBuilder';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type SourceCodeInfoOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  locationCount?: number;
  locationList?: Array<Location>;
  locationOrBuilderList?: Array<LocationOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

