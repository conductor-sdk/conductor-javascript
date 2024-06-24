/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Descriptor } from './Descriptor';
import type { Location } from './Location';
import type { LocationOrBuilder } from './LocationOrBuilder';
import type { ParserSourceCodeInfo } from './ParserSourceCodeInfo';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type SourceCodeInfo = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: SourceCodeInfo;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  locationCount?: number;
  locationList?: Array<Location>;
  locationOrBuilderList?: Array<LocationOrBuilder>;
  memoizedSerializedSize?: number;
  parserForType?: ParserSourceCodeInfo;
  serializedSize?: number;
  unknownFields?: UnknownFieldSet;
};

