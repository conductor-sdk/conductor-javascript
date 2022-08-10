/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MigrationResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Migrate workflows from Redis to Postgres
   * @param batchSize
   * @param startFromTimestamp
   * @returns any OK
   * @throws ApiError
   */
  public migrateWorkflows(
    batchSize: number,
    startFromTimestamp: number,
  ): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/migrate_workflow',
      query: {
        'batchSize': batchSize,
        'startFromTimestamp': startFromTimestamp,
      },
    });
  }

  /**
   * Migrate Workflow Index t o the sharded table
   * @returns number OK
   * @throws ApiError
   */
  public migrateIndex(): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/migrate_index',
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
      url: '/admin/migrate_metadata',
    });
  }

}
