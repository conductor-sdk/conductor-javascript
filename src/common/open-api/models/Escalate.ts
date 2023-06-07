/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeoutPolicy } from './TimeoutPolicy';

export type Escalate = (TimeoutPolicy & {
  subjects?: Array<string>;
  timeoutSeconds?: number;
} & {
  subjects: Array<string>;
});

