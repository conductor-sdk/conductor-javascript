/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpsertUserRequest = {
  /**
   * User's full name
   */
  name: string;
  roles?: UpsertUserRequest.roles;
  /**
   * Ids of the groups this user belongs to
   */
  groups?: Array<string>;
};

export namespace UpsertUserRequest {

  export enum roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
    WORKER = 'WORKER',
    METADATA_MANAGER = 'METADATA_MANAGER',
    WORKFLOW_MANAGER = 'WORKFLOW_MANAGER',
  }


}
