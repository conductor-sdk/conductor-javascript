/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type LocationOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  leadingComments?: string;
  leadingCommentsBytes?: ByteString;
  leadingDetachedCommentsCount?: number;
  leadingDetachedCommentsList?: Array<string>;
  pathCount?: number;
  pathList?: Array<number>;
  spanCount?: number;
  spanList?: Array<number>;
  trailingComments?: string;
  trailingCommentsBytes?: ByteString;
  unknownFields?: UnknownFieldSet;
};

