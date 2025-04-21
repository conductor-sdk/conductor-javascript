/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalStorageLocation } from '../models/ExternalStorageLocation';
import type { RerunWorkflowRequest } from '../models/RerunWorkflowRequest';
import type { ScrollableSearchResultWorkflowSummary } from '../models/ScrollableSearchResultWorkflowSummary';
import type { SearchResultWorkflow } from '../models/SearchResultWorkflow';
import type { SearchResultWorkflowSummary } from '../models/SearchResultWorkflowSummary';
import type { SkipTaskRequest } from '../models/SkipTaskRequest';
import type { StartWorkflowRequest } from '../models/StartWorkflowRequest';
import type { Workflow } from '../models/Workflow';
import type { WorkflowRun } from '../models/WorkflowRun';
import type { WorkflowStatus } from '../models/WorkflowStatus';
import type { WorkflowTestRequest } from '../models/WorkflowTestRequest';


import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import {TaskRun} from "../models/TaskRun";
import {WorkflowSignalReturnStrategy} from "../../types";

export class WorkflowResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) { }

  /**
   * Retrieve all the running workflows
   * @param name
   * @param version
   * @param startTime
   * @param endTime
   * @returns string OK
   * @throws ApiError
   */
  public getRunningWorkflow(
    name: string,
    version: number = 1,
    startTime?: number,
    endTime?: number,
  ): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/running/{name}',
      path: {
        'name': name,
      },
      query: {
        'version': version,
        'startTime': startTime,
        'endTime': endTime,
      },
    });
  }

  /**
   * Execute a workflow synchronously
   * @param body
   * @param name
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds - Optional, defaults to 10
   * @param consistency - Optional, defaults to "DURABLE"
   * @param returnStrategy - Optional, defaults to "TARGET_WORKFLOW"
   * @returns SignalResponse - The type depends on returnStrategy
   * @throws ApiError
   */
  public executeWorkflow(
      body: StartWorkflowRequest,
      name: string,
      version: number,
      requestId?: string,
      waitUntilTaskRef?: string,
      waitForSeconds?: number,
      consistency?: string,
      returnStrategy?: string,
  ): CancelablePromise<WorkflowRun | TaskRun> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/execute/{name}/{version}',
      path: {
        'name': name,
        'version': version,
      },
      query: {
        'requestId': requestId,
        'waitUntilTaskRef': waitUntilTaskRef,
        'waitForSeconds': waitForSeconds,
        'consistency': consistency,
        'returnStrategy': returnStrategy,
      },
      body: body,
      mediaType: 'application/json',
    });
  }

  /**
   * Execute a workflow and return the target workflow
   * @param body
   * @param name
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds - Optional, defaults to 10
   * @param consistency - Optional, defaults to "DURABLE"
   * @returns WorkflowRun
   * @throws ApiError
   */
  public executeWorkflowWithTargetWorkflow(
      body: StartWorkflowRequest,
      name: string,
      version: number,
      requestId?: string,
      waitUntilTaskRef?: string,
      waitForSeconds?: number,
      consistency?: string,
  ): CancelablePromise<WorkflowRun> {
    return this.executeWorkflow(
        body,
        name,
        version,
        requestId,
        waitUntilTaskRef,
        waitForSeconds,
        consistency,
        WorkflowSignalReturnStrategy.TARGET_WORKFLOW
    ) as CancelablePromise<WorkflowRun>;
  }

  /**
   * Execute a workflow and return the blocking workflow
   * @param body
   * @param name
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds - Optional, defaults to 10
   * @param consistency - Optional, defaults to "DURABLE"
   * @returns WorkflowRun
   * @throws ApiError
   */
  public executeWorkflowWithBlockingWorkflow(
      body: StartWorkflowRequest,
      name: string,
      version: number,
      requestId?: string,
      waitUntilTaskRef?: string,
      waitForSeconds?: number,
      consistency?: string,
  ): CancelablePromise<WorkflowRun> {
    return this.executeWorkflow(
        body,
        name,
        version,
        requestId,
        waitUntilTaskRef,
        waitForSeconds,
        consistency,
        WorkflowSignalReturnStrategy.BLOCKING_WORKFLOW
    ) as CancelablePromise<WorkflowRun>;
  }

  /**
   * Execute a workflow and return the blocking task
   * @param body
   * @param name
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds - Optional, defaults to 10
   * @param consistency - Optional, defaults to "DURABLE"
   * @returns TaskRun
   * @throws ApiError
   */
  public executeWorkflowWithBlockingTask(
      body: StartWorkflowRequest,
      name: string,
      version: number,
      requestId?: string,
      waitUntilTaskRef?: string,
      waitForSeconds?: number,
      consistency?: string,
  ): CancelablePromise<TaskRun> {
    return this.executeWorkflow(
        body,
        name,
        version,
        requestId,
        waitUntilTaskRef,
        waitForSeconds,
        consistency,
        WorkflowSignalReturnStrategy.BLOCKING_TASK
    ) as CancelablePromise<TaskRun>;
  }

  /**
   * Execute a workflow and return the blocking task input
   * @param body
   * @param name
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds - Optional, defaults to 10
   * @param consistency - Optional, defaults to "DURABLE"
   * @returns TaskRun
   * @throws ApiError
   */
  public executeWorkflowWithBlockingTaskInput(
      body: StartWorkflowRequest,
      name: string,
      version: number,
      requestId?: string,
      waitUntilTaskRef?: string,
      waitForSeconds?: number,
      consistency?: string,
  ): CancelablePromise<TaskRun> {
    return this.executeWorkflow(
        body,
        name,
        version,
        requestId,
        waitUntilTaskRef,
        waitForSeconds,
        consistency,
        WorkflowSignalReturnStrategy.BLOCKING_TASK_INPUT
    ) as CancelablePromise<TaskRun>;
  }

  /**
   * Start a new workflow with StartWorkflowRequest, which allows task to be executed in a domain
   * @param requestBody
   * @returns string OK
   * @throws ApiError
   */
  public startWorkflow(
    requestBody: StartWorkflowRequest,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Starts the decision task for a workflow
   * @param workflowId
   * @returns any OK
   * @throws ApiError
   */
  public decide(
    workflowId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/workflow/decide/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
    });
  }

  /**
   * Reruns the workflow from a specific task
   * @param workflowId
   * @param requestBody
   * @returns string OK
   * @throws ApiError
   */
  public rerun(
    workflowId: string,
    requestBody: RerunWorkflowRequest,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/rerun',
      path: {
        'workflowId': workflowId,
      },
      body: requestBody,
      mediaType: 'application/json',
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
   * @returns SearchResultWorkflow OK
   * @throws ApiError
   */
  public searchV21(
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
  ): CancelablePromise<SearchResultWorkflow> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/search-v2',
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
   * Pauses the workflow
   * @param workflowId
   * @returns any OK
   * @throws ApiError
   */
  public pauseWorkflow(
    workflowId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/workflow/{workflowId}/pause',
      path: {
        'workflowId': workflowId,
      },
    });
  }

  /**
   * Skips a given task from a current running workflow
   * @param workflowId
   * @param taskReferenceName
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public skipTaskFromWorkflow(
    workflowId: string,
    taskReferenceName: string,
    requestBody?: SkipTaskRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/workflow/{workflowId}/skiptask/{taskReferenceName}',
      path: {
        'workflowId': workflowId,
        'taskReferenceName': taskReferenceName,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Lists workflows for the given correlation id list
   * @param name
   * @param requestBody
   * @param includeClosed
   * @param includeTasks
   * @returns Workflow OK
   * @throws ApiError
   */
  public getWorkflows(
    name: string,
    requestBody: Array<string>,
    includeClosed: boolean = false,
    includeTasks: boolean = false,
  ): CancelablePromise<Record<string, Array<Workflow>>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{name}/correlated',
      path: {
        'name': name,
      },
      query: {
        'includeClosed': includeClosed,
        'includeTasks': includeTasks,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Gets the workflow by workflow id
   * @param workflowId
   * @param includeOutput
   * @param includeVariables
   * @returns WorkflowStatus OK
   * @throws ApiError
   */
  public getWorkflowStatusSummary(
    workflowId: string,
    includeOutput: boolean = false,
    includeVariables: boolean = false,
  ): CancelablePromise<WorkflowStatus> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/{workflowId}/status',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'includeOutput': includeOutput,
        'includeVariables': includeVariables,
      },
    });
  }

  /**
   * Lists workflows for the given correlation id
   * @param name
   * @param correlationId
   * @param includeClosed
   * @param includeTasks
   * @returns Workflow OK
   * @throws ApiError
   */
  public getWorkflows1(
    name: string,
    correlationId: string,
    includeClosed: boolean = false,
    includeTasks: boolean = false,
  ): CancelablePromise<Array<Workflow>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/{name}/correlated/{correlationId}',
      path: {
        'name': name,
        'correlationId': correlationId,
      },
      query: {
        'includeClosed': includeClosed,
        'includeTasks': includeTasks,
      },
    });
  }

  /**
   * Retries the last failed task
   * @param workflowId
   * @param resumeSubworkflowTasks
   * @returns void
   * @throws ApiError
   */
  public retry1(
    workflowId: string,
    resumeSubworkflowTasks: boolean = false,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/retry',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'resumeSubworkflowTasks': resumeSubworkflowTasks,
      },
    });
  }

  /**
   * Gets the workflow by workflow id
   * @param workflowId
   * @param includeTasks
   * @returns Workflow OK
   * @throws ApiError
   */
  public getExecutionStatus(
    workflowId: string,
    includeTasks: boolean = true,
  ): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'includeTasks': includeTasks,
      },
    });
  }

  /**
   * Terminate workflow execution
   * @param workflowId
   * @param reason
   * @returns any OK
   * @throws ApiError
   */
  public terminate1(
    workflowId: string,
    reason?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/workflow/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'reason': reason,
      },
    });
  }

  /**
   * Resumes the workflow
   * @param workflowId
   * @returns any OK
   * @throws ApiError
   */
  public resumeWorkflow(
    workflowId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/workflow/{workflowId}/resume',
      path: {
        'workflowId': workflowId,
      },
    });
  }

  /**
   * Removes the workflow from the system
   * @param workflowId
   * @param archiveWorkflow
   * @returns any OK
   * @throws ApiError
   */
  public delete(
    workflowId: string,
    archiveWorkflow: boolean = true,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/workflow/{workflowId}/remove',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'archiveWorkflow': archiveWorkflow,
      },
    });
  }

  /**
   * Search for workflows based on task parameters
   * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @returns SearchResultWorkflowSummary OK
   * @throws ApiError
   */
  public searchWorkflowsByTasks(
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
  ): CancelablePromise<SearchResultWorkflowSummary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/search-by-tasks',
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
   * Get the uri and path of the external storage where the workflow payload is to be stored
   * @param path
   * @param operation
   * @param payloadType
   * @returns ExternalStorageLocation OK
   * @throws ApiError
   */
  public getExternalStorageLocation(
    path: string,
    operation: string,
    payloadType: string,
  ): CancelablePromise<ExternalStorageLocation> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/externalstoragelocation',
      query: {
        'path': path,
        'operation': operation,
        'payloadType': payloadType,
      },
    });
  }

  /**
   * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
   * @param name
   * @param requestBody
   * @param version
   * @param correlationId
   * @param priority
   * @returns string OK
   * @throws ApiError
   */
  public startWorkflow1(
    name: string,
    requestBody: Record<string, any>,
    version?: number,
    correlationId?: string,
    priority?: number,
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{name}',
      path: {
        'name': name,
      },
      query: {
        'version': version,
        'correlationId': correlationId,
        'priority': priority,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Restarts a completed workflow
   * @param workflowId
   * @param useLatestDefinitions
   * @returns void
   * @throws ApiError
   */
  public restart1(
    workflowId: string,
    useLatestDefinitions: boolean = false,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/restart',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'useLatestDefinitions': useLatestDefinitions,
      },
    });
  }

  /**
   * Search for workflows based on payload and other parameters
   * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC.
   * @param queryId
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @param skipCache
   * @returns ScrollableSearchResultWorkflowSummary OK
   * @throws ApiError
   */
  public search1(
    queryId?: string,
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
    skipCache: boolean = false,
  ): CancelablePromise<ScrollableSearchResultWorkflowSummary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/search',
      query: {
        'queryId': queryId,
        'start': start,
        'size': size,
        'sort': sort,
        'freeText': freeText,
        'query': query,
        'skipCache': skipCache,
      },
    });
  }

  /**
   * Search for workflows based on task parameters
   * use sort options as sort=<field>:ASC|DESC e.g. sort=name&sort=workflowId:DESC. If order is not specified, defaults to ASC
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @returns SearchResultWorkflow OK
   * @throws ApiError
   */
  public searchWorkflowsByTasksV2(
    start?: number,
    size: number = 100,
    sort?: string,
    freeText: string = '*',
    query?: string,
  ): CancelablePromise<SearchResultWorkflow> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/search-by-tasks-v2',
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
   * Resets callback times of all non-terminal SIMPLE tasks to 0
   * @param workflowId
   * @returns void
   * @throws ApiError
   */
  public resetWorkflow(
    workflowId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/resetcallbacks',
      path: {
        'workflowId': workflowId,
      },
    });
  }

  /**
   * Test workflow execution using mock data
   * @param requestBody
   * @returns Workflow OK
   * @throws ApiError
   */
  public testWorkflow(
    requestBody: WorkflowTestRequest
  ): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
