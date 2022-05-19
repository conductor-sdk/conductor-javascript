/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpsertGroupRequest = {
  /**
   * A general description of the group
   */
  description: string;
  roles?: UpsertGroupRequest.roles;
};

export namespace UpsertGroupRequest {

  export enum roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
    WORKER = 'WORKER',
    METADATA_MANAGER = 'METADATA_MANAGER',
    WORKFLOW_MANAGER = 'WORKFLOW_MANAGER',
  }


}
