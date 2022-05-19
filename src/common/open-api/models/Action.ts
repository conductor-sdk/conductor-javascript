/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StartWorkflow } from './StartWorkflow';
import type { TaskDetails } from './TaskDetails';

export type Action = {
  action?: Action.action;
  start_workflow?: StartWorkflow;
  complete_task?: TaskDetails;
  fail_task?: TaskDetails;
  expandInlineJSON?: boolean;
};

export namespace Action {

  export enum action {
    START_WORKFLOW = 'start_workflow',
    COMPLETE_TASK = 'complete_task',
    FAIL_TASK = 'fail_task',
  }


}
