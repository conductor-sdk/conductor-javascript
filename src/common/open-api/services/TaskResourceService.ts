/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalStorageLocation } from '../models/ExternalStorageLocation';
import type { PollData } from '../models/PollData';
import type { SearchResultTask } from '../models/SearchResultTask';
import type { SearchResultTaskSummary } from '../models/SearchResultTaskSummary';
import type { Task } from '../models/Task';
import type { TaskExecLog } from '../models/TaskExecLog';
import type { TaskResult } from '../models/TaskResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import {Workflow} from "../models/Workflow";
import {TaskResultStatus} from "../../../core";
import {ReturnStrategy} from "../../types";
import {SignalResponse} from "../models/SignalResponse";
import {WorkflowRun} from "../models/WorkflowRun";
import {TaskRun} from "../models/TaskRun";
import {TaskResultStatusEnum} from "../models/TaskResultStatusEnum";

export class TaskResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Poll for a task of a certain type
   * @param tasktype
   * @param workerid
   * @param domain
   * @returns Task OK
   * @throws ApiError
   */
  public poll(
    tasktype: string,
    workerid?: string,
    domain?: string,
  ): CancelablePromise<Task> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/poll/{tasktype}',
      path: {
        'tasktype': tasktype,
      },
      query: {
        'workerid': workerid,
        'domain': domain,
      },
    });
  }

  /**
   * Get the details about each queue
   * @returns number OK
   * @throws ApiError
   */
  public allVerbose(): CancelablePromise<Record<string, Record<string, Record<string, number>>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/queue/all/verbose',
    });
  }

  /**
   * Update a task By Ref Name
   * @param workflowId
   * @param taskRefName
   * @param status
   * @param requestBody
   * @returns string OK
   * @throws ApiError
   */
  public updateTask(
    workflowId: string,
    taskRefName: string,
    status: 'IN_PROGRESS' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED',
    requestBody: Record<string, any>,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks/{workflowId}/{taskRefName}/{status}',
      path: {
        'workflowId': workflowId,
        'taskRefName': taskRefName,
        'status': status,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get task by Id
   * @param taskId
   * @returns Task OK
   * @throws ApiError
   */
  public getTask(
    taskId: string,
  ): CancelablePromise<Task> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/{taskId}',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Get the details about each queue
   * @returns number OK
   * @throws ApiError
   */
  public all(): CancelablePromise<Record<string, number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/queue/all',
    });
  }

  /**
   * Requeue pending tasks
   * @param taskType
   * @returns string OK
   * @throws ApiError
   */
  public requeuePendingTask(
    taskType: string,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks/queue/requeue/{taskType}',
      path: {
        'taskType': taskType,
      },
    });
  }

  /**
   * Search for tasks based in payload and other parameters
   * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @returns SearchResultTaskSummary OK
   * @throws ApiError
   */
  public search(
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
  ): CancelablePromise<SearchResultTaskSummary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/search',
      query: {
        'start': start,
        'size': size,
        'sort': sort,
        'freeText': freeText,
        'query': query,
      },
    });
  }

  /**
   * Search for tasks based in payload and other parameters
   * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @returns SearchResultTask OK
   * @throws ApiError
   */
  public searchV22(
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
  ): CancelablePromise<SearchResultTask> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/search-v2',
      query: {
        'start': start,
        'size': size,
        'sort': sort,
        'freeText': freeText,
        'query': query,
      },
    });
  }

  /**
   * Get the last poll data for a given task type
   * @param taskType
   * @returns PollData OK
   * @throws ApiError
   */
  public getPollData(
    taskType: string,
  ): CancelablePromise<Array<PollData>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/queue/polldata',
      query: {
        'taskType': taskType,
      },
    });
  }

  /**
   * Get Task Execution Logs
   * @param taskId
   * @returns TaskExecLog OK
   * @throws ApiError
   */
  public getTaskLogs(
    taskId: string,
  ): CancelablePromise<Array<TaskExecLog>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/{taskId}/log',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Log Task Execution Details
   * @param taskId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public log(
    taskId: string,
    requestBody: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks/{taskId}/log',
      path: {
        'taskId': taskId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get the last poll data for all task types
   * @returns PollData OK
   * @throws ApiError
   */
  public getAllPollData(): CancelablePromise<Array<PollData>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/queue/polldata/all',
    });
  }

  /**
   * Batch poll for a task of a certain type
   * @param tasktype
   * @param workerid
   * @param domain
   * @param count
   * @param timeout
   * @returns Task OK
   * @throws ApiError
   */
  public batchPoll(
    tasktype: string,
    workerid?: string,
    domain?: string,
    count: number = 1,
    timeout: number = 100,
  ): CancelablePromise<Array<Task>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/poll/batch/{tasktype}',
      path: {
        'tasktype': tasktype,
      },
      query: {
        'workerid': workerid,
        'domain': domain,
        'count': count,
        'timeout': timeout,
      },
    });
  }

  /**
   * Update a task
   * @param requestBody
   * @returns string OK
   * @throws ApiError
   */
  public updateTask1(
    requestBody: TaskResult,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Task type queue sizes
   * @param taskType
   * @returns number OK
   * @throws ApiError
   */
  public size1(
    taskType?: Array<string>,
  ): CancelablePromise<Record<string, number>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/queue/sizes',
      query: {
        'taskType': taskType,
      },
    });
  }

  /**
   * Get the external uri where the task payload is to be stored
   * @param path
   * @param operation
   * @param payloadType
   * @returns ExternalStorageLocation OK
   * @throws ApiError
   */
  public getExternalStorageLocation1(
    path: string,
    operation: string,
    payloadType: string,
  ): CancelablePromise<ExternalStorageLocation> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tasks/externalstoragelocation',
      query: {
        'path': path,
        'operation': operation,
        'payloadType': payloadType,
      },
    });
  }

  /**
   * Update a task By Ref Name synchronously. The output data is merged if data from a previous API call already exists.
   * @param workflowId
   * @param taskRefName
   * @param status
   * @param output
   * @param workerId - Optional
   * @returns Workflow
   * @throws ApiError
   */
  public updateTaskSync(
      workflowId: string,
      taskRefName: string,
      status:TaskResultStatusEnum,
      output: Record<string, any>,
      workerId?: string,
  ): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks/{workflowId}/{taskRefName}/{status}/sync',
      path: {
        'workflowId': workflowId,
        'taskRefName': taskRefName,
        'status': status,
      },
      query: {
        'workerid': workerId,
      },
      body: output,
      mediaType: 'application/json',
    });
  }

  /**
   * Signals a task in a workflow synchronously and returns data based on the specified return strategy
   * @param workflowId - Workflow ID of the workflow to be signaled
   * @param status - Signal status to be set for the workflow
   * @param output - Output for the task
   * @param returnStrategy - Optional strategy for what data to return (defaults to TARGET_WORKFLOW)
   * @returns SignalResponse with data based on the return strategy
   * @throws ApiError
   */
  public signal(
      workflowId: string,
      status: TaskResultStatusEnum,
      output: Record<string, any>,
      returnStrategy: ReturnStrategy = ReturnStrategy.TARGET_WORKFLOW,
  ): CancelablePromise<SignalResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks/{workflowId}/{status}/signal/sync',
      path: {
        'workflowId': workflowId,
        'status': status,
      },
      query: {
        'returnStrategy': returnStrategy,
      },
      body: output,
      mediaType: 'application/json',
    });
  }

  /**
   * Signals a task in a workflow asynchronously (fire-and-forget)
   * @param workflowId - Workflow ID of the workflow to be signaled
   * @param status - Signal status to be set for the workflow
   * @param output - Output for the task
   * @returns Promise<void>
   * @throws ApiError
   */
  public signalAsync(
      workflowId: string,
      status: TaskResultStatusEnum,
      output: Record<string, any>,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tasks/{workflowId}/{status}/signal',
      path: {
        'workflowId': workflowId,
        'status': status,
      },
      body: output,
      mediaType: 'application/json',
    });
  }

}
