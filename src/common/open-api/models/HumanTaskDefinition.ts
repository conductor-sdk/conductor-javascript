/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HumanTaskAssignment } from './HumanTaskAssignment';
import type { HumanTaskTemplate } from './HumanTaskTemplate';
import type { HumanTaskTrigger } from './HumanTaskTrigger';
import type { UserFormTemplate } from './UserFormTemplate';
export type HumanTaskDefinition = {
  assignmentCompletionStrategy?: 'LEAVE_OPEN' | 'TERMINATE';
  assignments?: Array<HumanTaskAssignment>;
  displayName?: string;
  fullTemplate?: HumanTaskTemplate;
  taskTriggers?: Array<HumanTaskTrigger>;
  userFormTemplate?: UserFormTemplate;
};

