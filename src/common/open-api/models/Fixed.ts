/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignmentPolicy } from './AssignmentPolicy';

export type Fixed = (AssignmentPolicy & {
  assignee?: string;
  assigneeType?: 'EXTERNAL_USER' | 'EXTERNAL_GROUP' | 'CONDUCTOR_USER' | 'CONDUCTOR_GROUP';
});

