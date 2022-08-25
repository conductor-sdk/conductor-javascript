/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StartWorkflow } from './StartWorkflow';
import type { TaskDetails } from './TaskDetails';

export type Action = {
  action?: 'start_workflow' | 'complete_task' | 'fail_task';
  start_workflow?: StartWorkflow;
  complete_task?: TaskDetails;
  fail_task?: TaskDetails;
  expandInlineJSON?: boolean;
};

