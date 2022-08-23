/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpsertGroupRequest = {
  /**
   * A general description of the group
   */
  description: string;
  roles?: 'ADMIN' | 'USER' | 'WORKER' | 'METADATA_MANAGER' | 'WORKFLOW_MANAGER';
};

