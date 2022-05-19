/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Group } from './Group';
import type { Role } from './Role';

export type ConductorUser = {
  id?: string;
  name?: string;
  roles?: Array<Role>;
  groups?: Array<Group>;
  uuid?: string;
  applicationUser?: boolean;
};
