/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QueueAdminResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Queue Names
   * @returns string OK
   * @throws ApiError
   */
  public names(): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/queue/',
    });
  }

  /**
   * Get the queue length
   * @returns number OK
   * @throws ApiError
   */
  public size(): CancelablePromise<Record<string, number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/queue/size',
    });
  }

  /**
   * Publish a message in queue to mark a wait task (by taskId) as completed.
   * @param workflowId
   * @param taskId
   * @param status
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public updateByTaskId(
    workflowId: string,
    taskId: string,
    status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED',
    requestBody: Record<string, any>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/queue/update/{workflowId}/task/{taskId}/{status}',
      path: {
        'workflowId': workflowId,
        'taskId': taskId,
        'status': status,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Publish a message in queue to mark a wait task as completed.
   * @param workflowId
   * @param taskRefName
   * @param status
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public update1(
    workflowId: string,
    taskRefName: string,
    status: 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED',
    requestBody: Record<string, any>,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/queue/update/{workflowId}/{taskRefName}/{status}',
      path: {
        'workflowId': workflowId,
        'taskRefName': taskRefName,
        'status': status,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
