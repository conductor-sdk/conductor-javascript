/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BackToAssigment } from './BackToAssigment';
import type { ClearAssigment } from './ClearAssigment';
import type { Escalate } from './Escalate';
import type { FFAAssignment } from './FFAAssignment';
import type { Fixed } from './Fixed';
import type { LeastBusyGroupMemberAssignment } from './LeastBusyGroupMemberAssignment';
import type { Never } from './Never';
import type { Terminate } from './Terminate';

export type HumanTaskEntry = {
  assignee?: string;
  assigneeType?: 'EXTERNAL_USER' | 'EXTERNAL_GROUP' | 'CONDUCTOR_USER' | 'CONDUCTOR_GROUP';
  assignmentPolicy?: (FFAAssignment | Fixed | LeastBusyGroupMemberAssignment);
  claimedBy?: string;
  createdBy?: string;
  createdOn?: number;
  escalatedAt?: number;
  output?: Record<string, Record<string, any>>;
  owners?: Array<string>;
  predefinedInput?: Record<string, Record<string, any>>;
  state?: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT';
  taskId?: string;
  taskName?: string;
  taskRefName?: string;
  templateId?: string;
  timeoutPolicy?: (BackToAssigment | ClearAssigment | Escalate | Never | Terminate);
  workflowId?: string;
  workflowName?: string;
};

