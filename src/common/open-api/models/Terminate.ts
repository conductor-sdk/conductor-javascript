/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeoutPolicy } from './TimeoutPolicy';

export type Terminate = (TimeoutPolicy & {
  timeoutSeconds?: number;
});

