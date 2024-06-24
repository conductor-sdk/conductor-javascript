/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TargetRef } from './TargetRef';
export type GrantedAccess = {
  access?: Array<'CREATE' | 'READ' | 'EXECUTE' | 'UPDATE' | 'DELETE'>;
  tag?: string;
  target?: TargetRef;
};

