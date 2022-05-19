/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User, group or role which is granted/removed access
 */
export type SubjectRef = {
  /**
   * User, role or group
   */
  type?: SubjectRef.type;
  id: string;
};

export namespace SubjectRef {

  /**
   * User, role or group
   */
  export enum type {
    USER = 'USER',
    ROLE = 'ROLE',
    GROUP = 'GROUP',
  }


}
