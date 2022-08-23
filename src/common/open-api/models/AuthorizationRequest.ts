/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectRef } from './SubjectRef';
import type { TargetRef } from './TargetRef';

export type AuthorizationRequest = {
  subject: SubjectRef;
  target: TargetRef;
  /**
   * The set of access which is granted or removed
   */
  access: Array<'CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'EXECUTE'>;
};

