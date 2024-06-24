/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from '../models/Task';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Remove execution cached values for the task
   * @param taskDefName
   * @returns any OK
   * @throws ApiError
   */
  public clearTaskExecutionCache(
    taskDefName: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/cache/clear/{taskDefName}',
      path: {
        'taskDefName': taskDefName,
      },
    });
  }
  /**
   * Verify and repair workflow consistency
   * @param workflowId
   * @returns string OK
   * @throws ApiError
   */
  public verifyAndRepairWorkflowConsistency(
    workflowId: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/consistency/verifyAndRepair/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
    });
  }
  /**
   * Get details of redis usage
   * @returns any OK
   * @throws ApiError
   */
  public getRedisUsage(): CancelablePromise<Record<string, Record<string, any>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/redisUsage',
    });
  }
  /**
   * Queue up all the running workflows for sweep
   * @param workflowId
   * @returns string OK
   * @throws ApiError
   */
  public requeueSweep(
    workflowId: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/admin/sweep/requeue/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
    });
  }
  /**
   * Get the list of pending tasks for a given task type
   * @param tasktype
   * @param start
   * @param count
   * @returns Task OK
   * @throws ApiError
   */
  public view(
    tasktype: string,
    start?: number,
    count: number = 100,
  ): CancelablePromise<Array<Task>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/admin/task/{tasktype}',
      path: {
        'tasktype': tasktype,
      },
      query: {
        'start': start,
        'count': count,
      },
    });
  }
}
