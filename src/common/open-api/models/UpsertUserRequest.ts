/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpsertUserRequest = {
  /**
   * User's full name
   */
  name: string;
  roles?: 'ADMIN' | 'USER' | 'WORKER' | 'METADATA_MANAGER' | 'WORKFLOW_MANAGER';
  /**
   * Ids of the groups this user belongs to
   */
  groups?: Array<string>;
};
