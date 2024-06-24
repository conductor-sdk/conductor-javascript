/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpsertUserRequest = {
  /**
   * Ids of the groups this user belongs to
   */
  groups?: Array<string>;
  /**
   * User's full name
   */
  name: string;
  roles?: 'ADMIN' | 'USER' | 'WORKER' | 'METADATA_MANAGER' | 'WORKFLOW_MANAGER';
};

