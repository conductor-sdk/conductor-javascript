/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteString } from './ByteString';
import type { Descriptor } from './Descriptor';
import type { Message } from './Message';
import type { UninterpretedOption } from './UninterpretedOption';
import type { UninterpretedOptionOrBuilder } from './UninterpretedOptionOrBuilder';
import type { UnknownFieldSet } from './UnknownFieldSet';
export type FileOptionsOrBuilder = {
  allFields?: Record<string, Record<string, any>>;
  ccEnableArenas?: boolean;
  ccGenericServices?: boolean;
  csharpNamespace?: string;
  csharpNamespaceBytes?: ByteString;
  defaultInstanceForType?: Message;
  deprecated?: boolean;
  descriptorForType?: Descriptor;
  goPackage?: string;
  goPackageBytes?: ByteString;
  initializationErrorString?: string;
  initialized?: boolean;
  /**
   * @deprecated
   */
  javaGenerateEqualsAndHash?: boolean;
  javaGenericServices?: boolean;
  javaMultipleFiles?: boolean;
  javaOuterClassname?: string;
  javaOuterClassnameBytes?: ByteString;
  javaPackage?: string;
  javaPackageBytes?: ByteString;
  javaStringCheckUtf8?: boolean;
  objcClassPrefix?: string;
  objcClassPrefixBytes?: ByteString;
  optimizeFor?: 'SPEED' | 'CODE_SIZE' | 'LITE_RUNTIME';
  phpClassPrefix?: string;
  phpClassPrefixBytes?: ByteString;
  phpGenericServices?: boolean;
  phpMetadataNamespace?: string;
  phpMetadataNamespaceBytes?: ByteString;
  phpNamespace?: string;
  phpNamespaceBytes?: ByteString;
  pyGenericServices?: boolean;
  rubyPackage?: string;
  rubyPackageBytes?: ByteString;
  swiftPrefix?: string;
  swiftPrefixBytes?: ByteString;
  uninterpretedOptionCount?: number;
  uninterpretedOptionList?: Array<UninterpretedOption>;
  uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
  unknownFields?: UnknownFieldSet;
};

