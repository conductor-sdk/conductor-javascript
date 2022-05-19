/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MigrationResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Migrate workflows from Redis to Postgres
   * @returns number OK
   * @throws ApiError
   */
  public migrateWorkflows(): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/admin/migrate_workflow',
    });
  }

  /**
   * Migrate Workflow and Task Definitions to Postgres
   * @returns any OK
   * @throws ApiError
   */
  public migrateMetadata(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/admin/migrate_metadata',
    });
  }

}