/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FFAAssignment } from '../models/FFAAssignment';
import type { Fixed } from '../models/Fixed';
import type { HTScrollableSearchResultHumanTaskEntry } from '../models/HTScrollableSearchResultHumanTaskEntry';
import type { HumanTaskActionLogEntry } from '../models/HumanTaskActionLogEntry';
import type { HumanTaskEntry } from '../models/HumanTaskEntry';
import type { HumanTaskLoad } from '../models/HumanTaskLoad';
import type { HumanTaskStateLogEntry } from '../models/HumanTaskStateLogEntry';
import type { HumanTaskTemplate } from '../models/HumanTaskTemplate';
import type { HumanTaskTemplateEntry } from '../models/HumanTaskTemplateEntry';
import type { LeastBusyGroupMemberAssignment } from '../models/LeastBusyGroupMemberAssignment';
import type { SearchResultHumanTaskEntry } from '../models/SearchResultHumanTaskEntry';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HumanTaskService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List tasks by filters - task name, state, assignee, assignee type, claimed
   * @param state
   * @param assignee
   * @param assigneeType
   * @param claimedBy
   * @param taskName
   * @param freeText
   * @param includeInputOutput
   * @returns SearchResultHumanTaskEntry OK
   * @throws ApiError
   */
  public getTasksByFilter(
    state: 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT',
    assignee?: string,
    assigneeType?: 'EXTERNAL_USER' | 'EXTERNAL_GROUP' | 'CONDUCTOR_USER' | 'CONDUCTOR_GROUP',
    claimedBy?: string,
    taskName?: string,
    freeText?: string,
    includeInputOutput: boolean = false,
  ): CancelablePromise<SearchResultHumanTaskEntry> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks',
      query: {
        'state': state,
        'assignee': assignee,
        'assigneeType': assigneeType,
        'claimedBy': claimedBy,
        'taskName': taskName,
        'freeText': freeText,
        'includeInputOutput': includeInputOutput,
      },
    });
  }

  /**
   * Get task load grouped by workflow name and task ref name per user
   * @returns HumanTaskLoad OK
   * @throws ApiError
   */
  public getTaskLoad(): CancelablePromise<Array<HumanTaskLoad>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks/load',
    });
  }

  /**
   * Search human tasks
   * @param queryId
   * @param start
   * @param size
   * @param freeText
   * @param query
   * @param jsonQuery
   * @param includeInputOutput
   * @returns HTScrollableSearchResultHumanTaskEntry OK
   * @throws ApiError
   */
  public search1(
    queryId?: string,
    start?: number,
    size: number = 100,
    freeText: string = '*',
    query?: string,
    jsonQuery?: string,
    includeInputOutput: boolean = false,
  ): CancelablePromise<HTScrollableSearchResultHumanTaskEntry> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks/search',
      query: {
        'queryId': queryId,
        'start': start,
        'size': size,
        'freeText': freeText,
        'query': query,
        'jsonQuery': jsonQuery,
        'includeInputOutput': includeInputOutput,
      },
    });
  }

  /**
   * If the workflow is disconnected from tasks, this API can be used to clean up
   * @param taskId
   * @returns any OK
   * @throws ApiError
   */
  public updateTaskOutput1(
    taskId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/human/tasks/{taskId}',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Get a task
   * @param taskId
   * @returns HumanTaskEntry OK
   * @throws ApiError
   */
  public getTask1(
    taskId: string,
  ): CancelablePromise<HumanTaskEntry> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks/{taskId}',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Get human task action log entries by task id
   * @param taskId
   * @returns HumanTaskActionLogEntry OK
   * @throws ApiError
   */
  public getActionLogs(
    taskId: string,
  ): CancelablePromise<Array<HumanTaskActionLogEntry>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks/{taskId}/actionLogs',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Claim a task by authenticated Conductor user
   * @param taskId
   * @returns any OK
   * @throws ApiError
   */
  public claimTask(
    taskId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/tasks/{taskId}/claim',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Claim a task to an external user
   * @param taskId
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public assignAndClaim(
    taskId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/tasks/{taskId}/externalUser/{userId}',
      path: {
        'taskId': taskId,
        'userId': userId,
      },
    });
  }

  /**
   * Release a task without completing it
   * @param taskId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public reassignTask(
    taskId: string,
    requestBody: (FFAAssignment | Fixed | LeastBusyGroupMemberAssignment),
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/tasks/{taskId}/reassign',
      path: {
        'taskId': taskId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Release a task without completing it
   * @param taskId
   * @returns any OK
   * @throws ApiError
   */
  public releaseTask(
    taskId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/tasks/{taskId}/release',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Get human task state log entries by task id
   * @param taskId
   * @returns HumanTaskStateLogEntry OK
   * @throws ApiError
   */
  public getStateLogs(
    taskId: string,
  ): CancelablePromise<Array<HumanTaskStateLogEntry>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks/{taskId}/stateLogs',
      path: {
        'taskId': taskId,
      },
    });
  }

  /**
   * Update task output, optionally complete
   * @param taskId
   * @param requestBody
   * @param complete
   * @returns any OK
   * @throws ApiError
   */
  public updateTaskOutput(
    taskId: string,
    requestBody: Record<string, Record<string, any>>,
    complete: boolean = false,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/tasks/{taskId}/update',
      path: {
        'taskId': taskId,
      },
      query: {
        'complete': complete,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete human task templates by name
   * @param name
   * @returns any OK
   * @throws ApiError
   */
  public deleteTemplatesByName(
    name: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/human/template',
      query: {
        'name': name,
      },
    });
  }

  /**
   * List all human task templates or get templates by name, or a template by name and version
   * @param name
   * @param version
   * @returns HumanTaskTemplateEntry OK
   * @throws ApiError
   */
  public getAllTemplates(
    name?: string,
    version?: number,
  ): CancelablePromise<Array<HumanTaskTemplateEntry>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/template',
      query: {
        'name': name,
        'version': version,
      },
    });
  }

  /**
   * Save human task template
   * @param requestBody
   * @param newVersion
   * @returns string OK
   * @throws ApiError
   */
  public saveTemplate(
    requestBody: HumanTaskTemplate,
    newVersion: boolean = false,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/human/template',
      query: {
        'newVersion': newVersion,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete human task template
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public deleteTemplateById(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/human/template/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get human task template by id
   * @param id
   * @returns HumanTaskTemplateEntry OK
   * @throws ApiError
   */
  public getTemplateById(
    id: string,
  ): CancelablePromise<HumanTaskTemplateEntry> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/template/{id}',
      path: {
        'id': id,
      },
    });
  }

}
