/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The object over which access is being granted or removed
 */
export type TargetRef = {
  id: 'Identifier of the target e.g. `name` in case it\'s a WORKFLOW_DEF';
  type: 'WORKFLOW' | 'WORKFLOW_DEF' | 'WORKFLOW_SCHEDULE' | 'EVENT_HANDLER' | 'TASK_DEF' | 'TASK_REF_NAME' | 'TASK_ID' | 'APPLICATION' | 'USER' | 'SECRET_NAME' | 'ENV_VARIABLE' | 'TAG' | 'DOMAIN' | 'INTEGRATION_PROVIDER' | 'INTEGRATION' | 'PROMPT' | 'USER_FORM_TEMPLATE' | 'WEBHOOK';
};

