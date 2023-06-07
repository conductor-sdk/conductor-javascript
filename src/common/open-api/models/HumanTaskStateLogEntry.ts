/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HumanTaskStateLogEntry = {
  assignee?: string;
  assigneeType?: 'EXTERNAL_USER' | 'EXTERNAL_GROUP' | 'CONDUCTOR_USER' | 'CONDUCTOR_GROUP';
  claimedBy?: string;
  id?: string;
  state?: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT';
  stateEnd?: number;
  stateStart?: number;
  taskId?: string;
  taskRefName?: string;
  workflowId?: string;
  workflowName?: string;
};

