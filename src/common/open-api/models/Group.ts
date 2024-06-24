/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from './Role';
export type Group = {
  defaultAccess?: Record<string, Array<'CREATE' | 'READ' | 'EXECUTE' | 'UPDATE' | 'DELETE'>>;
  description?: string;
  id?: string;
  roles?: Array<Role>;
};

