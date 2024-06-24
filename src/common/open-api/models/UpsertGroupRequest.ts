/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpsertGroupRequest = {
  /**
   * a default Map<TargetType, Set<Access> to share permissions, allowed target types: WORKFLOW_DEF, TASK_DEF, WORKFLOW_SCHEDULE
   */
  defaultAccess?: Record<string, Array<'CREATE' | 'READ' | 'EXECUTE' | 'UPDATE' | 'DELETE'>>;
  /**
   * A general description of the group
   */
  description: string;
  roles?: 'ADMIN' | 'USER' | 'WORKER' | 'METADATA_MANAGER' | 'WORKFLOW_MANAGER';
};

