/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The object over which access is being granted or removed
 */
export type TargetRef = {
  type: 'WORKFLOW_DEF' | 'TASK_DEF' | 'APPLICATION' | 'USER';
  id: 'Identifier of the target e.g. `name` in case it\'s a WORKFLOW_DEF';
};
