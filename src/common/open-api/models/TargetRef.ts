/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The object over which access is being granted or removed
 */
export type TargetRef = {
  type: TargetRef.type;
  id: TargetRef.id;
};

export namespace TargetRef {

  export enum type {
    WORKFLOW_DEF = 'WORKFLOW_DEF',
    TASK_DEF = 'TASK_DEF',
    APPLICATION = 'APPLICATION',
    USER = 'USER',
  }

  export enum id {
    IDENTIFIER_OF_THE_TARGET_E_G_NAME_IN_CASE_IT_S_A_WORKFLOW_DEF = 'Identifier of the target e.g. `name` in case it\'s a WORKFLOW_DEF',
  }


}
