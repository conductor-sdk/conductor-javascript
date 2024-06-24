/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Declaration } from './Declaration';
import type { DeclarationOrBuilder } from './DeclarationOrBuilder';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type ExtensionRangeOptionsOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  declarationCount?: number;
  declarationList?: Array<Declaration>;
  declarationOrBuilderList?: Array<DeclarationOrBuilder>;
  defaultInstanceForType?: Message;
  descriptorForType?: Descriptor;
  initializationErrorString?: string;
  initialized?: boolean;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
  verification?: 'DECLARATION' | 'UNVERIFIED';
};

