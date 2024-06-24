/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from './Group';
import type { Role } from './Role';
export type ConductorUser = {
  applicationUser?: boolean;
  encryptedId?: boolean;
  encryptedIdDisplayValue?: string;
  groups?: Array<Group>;
  id?: string;
  name?: string;
  roles?: Array<Role>;
  uuid?: string;
};

