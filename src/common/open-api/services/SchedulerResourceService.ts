/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaveScheduleRequest } from '../models/SaveScheduleRequest';
import type { SearchResultWorkflowScheduleExecutionModel } from '../models/SearchResultWorkflowScheduleExecutionModel';
import type { WorkflowSchedule } from '../models/WorkflowSchedule';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SchedulerResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get an existing workflow schedule by name
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public getSchedule(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/schedules/{name}',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Deletes an existing workflow schedule by name
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public deleteSchedule(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/scheduler/schedules/{name}',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Get list of the next x (default 3, max 5) execution times for a scheduler
   * @param cronExpression
   * @param scheduleStartTime
   * @param scheduleEndTime
   * @param limit
   * @returns number OK
   * @throws ApiError
   */
  public getNextFewSchedules(
    cronExpression: string,
    scheduleStartTime?: number,
    scheduleEndTime?: number,
    limit: number = 3,
  ): CancelablePromise<Array<number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/nextFewSchedules',
      query: {
        'cronExpression': cronExpression,
        'scheduleStartTime': scheduleStartTime,
        'scheduleEndTime': scheduleEndTime,
        'limit': limit,
      },
    });
  }

  /**
   * Pauses an existing schedule by name
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public pauseSchedule(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/schedules/{name}/pause',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Pause all scheduling in a single conductor server instance (for debugging only)
   * @returns any OK
   * @throws ApiError
   */
  public pauseAllSchedules(): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/admin/pause',
    });
  }

  /**
   * Resume a paused schedule by name
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public resumeSchedule(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/schedules/{name}/resume',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Requeue all execution records
   * @returns any OK
   * @throws ApiError
   */
  public requeueAllExecutionRecords(): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/admin/requeue',
    });
  }

  /**
   * Resume all scheduling
   * @returns any OK
   * @throws ApiError
   */
  public resumeAllSchedules(): CancelablePromise<Record<string, any>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/admin/resume',
    });
  }

  /**
   * Get all existing workflow schedules and optionally filter by workflow name
   * @param workflowName
   * @returns WorkflowSchedule OK
   * @throws ApiError
   */
  public getAllSchedules(
    workflowName?: string,
  ): CancelablePromise<Array<WorkflowSchedule>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/schedules',
      query: {
        'workflowName': workflowName,
      },
    });
  }

  /**
   * Create or update a schedule for a specified workflow with a corresponding start workflow request
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public saveSchedule(
    requestBody: SaveScheduleRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/scheduler/schedules',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Test timeout - do not use in production
   * @returns any OK
   * @throws ApiError
   */
  public testTimeout(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/test/timeout',
    });
  }

  /**
   * Search for workflows based on payload and other parameters
   * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @returns SearchResultWorkflowScheduleExecutionModel OK
   * @throws ApiError
   */
  public searchV21(
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
  ): CancelablePromise<SearchResultWorkflowScheduleExecutionModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/scheduler/search/executions',
      query: {
        'start': start,
        'size': size,
        'sort': sort,
        'freeText': freeText,
        'query': query,
      },
    });
  }

}
