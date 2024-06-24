/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubjectRef } from './SubjectRef';
import type { TargetRef } from './TargetRef';
export type AuthorizationRequest = {
  /**
   * The set of access which is granted or removed
   */
  access: Array<'CREATE' | 'READ' | 'EXECUTE' | 'UPDATE' | 'DELETE'>;
  subject: SubjectRef;
  target: TargetRef;
};

