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
  type?: 'USER' | 'ROLE' | 'GROUP';
  id: string;
};
