/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { ParserLocation } from './ParserLocation';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type Location = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Location;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  leadingComments?: string;
  leadingCommentsBytes?: ByteString;
  leadingDetachedCommentsCount?: number;
  leadingDetachedCommentsList?: Array<string>;
  memoizedSerializedSize?: number;
  parserForType?: ParserLocation;
  pathCount?: number;
  pathList?: Array<number>;
  serializedSize?: number;
  spanCount?: number;
  spanList?: Array<number>;
  trailingComments?: string;
  trailingCommentsBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
};

