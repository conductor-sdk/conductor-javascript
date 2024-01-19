/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StartWorkflowRequest } from './StartWorkflowRequest';

export type HumanTaskTrigger = {
  startWorkflowRequest?: StartWorkflowRequest;
  triggerType?: 'ASSIGNEE_CHANGED' | 'PENDING' | 'IN_PROGRESS' | 'ASSIGNED' | 'COMPLETED' | 'TIMED_OUT';
};

