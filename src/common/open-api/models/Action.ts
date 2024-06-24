/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartWorkflowRequest } from './StartWorkflowRequest';
import type { TaskDetails } from './TaskDetails';
import type { TerminateWorkflow } from './TerminateWorkflow';
import type { UpdateWorkflowVariables } from './UpdateWorkflowVariables';
export type Action = {
  action?: 'start_workflow' | 'complete_task' | 'fail_task' | 'terminate_workflow' | 'update_workflow_variables';
  complete_task?: TaskDetails;
  expandInlineJSON?: boolean;
  fail_task?: TaskDetails;
  start_workflow?: StartWorkflowRequest;
  terminate_workflow?: TerminateWorkflow;
  update_workflow_variables?: UpdateWorkflowVariables;
};

