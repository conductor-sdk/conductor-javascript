/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignmentPolicy } from './AssignmentPolicy';

export type LeastBusyGroupMemberAssignment = (AssignmentPolicy & {
  groupId?: string;
});

