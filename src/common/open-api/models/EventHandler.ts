/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Action } from './Action';

export type EventHandler = {
  name: string;
  event: string;
  condition?: string;
  actions: Array<Action>;
  active?: boolean;
  evaluatorType?: string;
};
