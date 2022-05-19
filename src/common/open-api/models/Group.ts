/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

export type Group = {
  id?: string;
  description?: string;
  roles?: Array<Role>;
};
