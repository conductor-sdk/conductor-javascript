/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrelationIdsSearchRequest } from '../models/CorrelationIdsSearchRequest';
import type { RerunWorkflowRequest } from '../models/RerunWorkflowRequest';
import type { ScrollableSearchResultWorkflowSummary } from '../models/ScrollableSearchResultWorkflowSummary';
import type { SkipTaskRequest } from '../models/SkipTaskRequest';
import type { StartWorkflowRequest } from '../models/StartWorkflowRequest';
import type { TaskListSearchResultSummary } from '../models/TaskListSearchResultSummary';
import type { UpgradeWorkflowRequest } from '../models/UpgradeWorkflowRequest';
import type { Workflow } from '../models/Workflow';
import type { WorkflowRun } from '../models/WorkflowRun';
import type { WorkflowStateUpdate } from '../models/WorkflowStateUpdate';
import type { WorkflowStatus } from '../models/WorkflowStatus';
import type { WorkflowTestRequest } from '../models/WorkflowTestRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkflowResourceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
   * Lists workflows for the given correlation id list and workflow name list
   * @param requestBody
   * @param includeClosed
   * @param includeTasks
   * @returns Workflow OK
   * @throws ApiError
   */
  public getWorkflows1(
    requestBody: CorrelationIdsSearchRequest,
    includeClosed: boolean = false,
    includeTasks: boolean = false,
  ): CancelablePromise<Record<string, Array<Workflow>>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/correlated/batch',
      query: {
        'includeClosed': includeClosed,
        'includeTasks': includeTasks,
      },
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
   * Execute a workflow synchronously with input and outputs using get api
   * @param name
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds
   * @param xIdempotencyKey
   * @param xOnConflict
   * @returns any OK
   * @throws ApiError
   */
  public executeWorkflowAsGetApi(
    name: string,
    version?: number,
    requestId?: string,
    waitUntilTaskRef?: string,
    waitForSeconds: number = 10,
    xIdempotencyKey?: string,
    xOnConflict?: 'FAIL' | 'RETURN_EXISTING',
  ): CancelablePromise<Record<string, Record<string, any>>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/execute/{name}',
      path: {
        'name': name,
      },
      headers: {
        'requestId': requestId,
        'waitUntilTaskRef': waitUntilTaskRef,
        'waitForSeconds': waitForSeconds,
        'X-Idempotency-key': xIdempotencyKey,
        'X-on-conflict': xOnConflict,
      },
      query: {
        'version': version,
      },
    });
  }
  /**
   * Execute a workflow synchronously with input and outputs
   * @param name
   * @param requestBody
   * @param version
   * @param requestId
   * @param waitUntilTaskRef
   * @param waitForSeconds
   * @param xIdempotencyKey
   * @param xOnConflict
   * @returns any OK
   * @throws ApiError
   */
  public executeWorkflowAsApi(
    name: string,
    requestBody: Record<string, Record<string, any>>,
    version?: number,
    requestId?: string,
    waitUntilTaskRef?: string,
    waitForSeconds: number = 10,
    xIdempotencyKey?: string,
    xOnConflict?: 'FAIL' | 'RETURN_EXISTING',
  ): CancelablePromise<Record<string, Record<string, any>>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/execute/{name}',
      path: {
        'name': name,
      },
      headers: {
        'requestId': requestId,
        'waitUntilTaskRef': waitUntilTaskRef,
        'waitForSeconds': waitForSeconds,
        'X-Idempotency-key': xIdempotencyKey,
        'X-on-conflict': xOnConflict,
      },
      query: {
        'version': version,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Execute a workflow synchronously
   * @param name
   * @param version
   * @param requestId
   * @param requestBody
   * @param waitUntilTaskRef
   * @param waitForSeconds
   * @returns WorkflowRun OK
   * @throws ApiError
   */
  public executeWorkflow(
    name: string,
    version: number,
    requestId: string,
    requestBody: StartWorkflowRequest,
    waitUntilTaskRef?: string,
    waitForSeconds: number = 10,
  ): CancelablePromise<WorkflowRun> {
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
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
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
   * Search for workflows based on payload and other parameters
   * Search for workflows based on payload and other parameters.
   * The query parameter accepts exact matches using `=` and `IN` on the following fields: `workflowId`, `correlationId`, `taskId`, `workflowType`, `taskType`, and `status`.
   * Matches using `=` can be written as `taskType = HTTP`.
   * Matches using `IN` are written as `status IN (SCHEDULED, IN_PROGRESS)`.
   * The 'startTime' and 'modifiedTime' field uses unix timestamps and accepts queries using `<` and `>`, for example `startTime < 1696143600000`.
   * Queries can be combined using `AND`, for example `taskType = HTTP AND status = SCHEDULED`.
   *
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
   * Test workflow execution using mock data
   * @param requestBody
   * @returns Workflow OK
   * @throws ApiError
   */
  public testWorkflow(
    requestBody: WorkflowTestRequest,
  ): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Start a new workflow. Returns the ID of the workflow instance that can be later used for tracking
   * @param name
   * @param requestBody
   * @param version
   * @param correlationId
   * @param priority
   * @param xIdempotencyKey
   * @param xOnConflict
   * @returns string OK
   * @throws ApiError
   */
  public startWorkflow1(
    name: string,
    requestBody: Record<string, Record<string, any>>,
    version?: number,
    correlationId?: string,
    priority?: number,
    xIdempotencyKey?: string,
    xOnConflict?: 'FAIL' | 'RETURN_EXISTING',
  ): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{name}',
      path: {
        'name': name,
      },
      headers: {
        'X-Idempotency-key': xIdempotencyKey,
        'X-on-conflict': xOnConflict,
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
   * Lists workflows for the given correlation id
   * @param name
   * @param correlationId
   * @param includeClosed
   * @param includeTasks
   * @returns Workflow OK
   * @throws ApiError
   */
  public getWorkflows2(
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
   * Terminate workflow execution
   * @param workflowId
   * @param reason
   * @param triggerFailureWorkflow
   * @returns any OK
   * @throws ApiError
   */
  public terminate1(
    workflowId: string,
    reason?: string,
    triggerFailureWorkflow: boolean = false,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/workflow/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'reason': reason,
        'triggerFailureWorkflow': triggerFailureWorkflow,
      },
    });
  }
  /**
   * Gets the workflow by workflow id
   * @param workflowId
   * @param includeTasks
   * @param summarize
   * @returns Workflow OK
   * @throws ApiError
   */
  public getExecutionStatus(
    workflowId: string,
    includeTasks: boolean = true,
    summarize: boolean = false,
  ): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/{workflowId}',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'includeTasks': includeTasks,
        'summarize': summarize,
      },
    });
  }
  /**
   * Jump workflow execution to given task
   * Jump workflow execution to given task.
   * @param workflowId
   * @param requestBody
   * @param taskReferenceName
   * @returns any OK
   * @throws ApiError
   */
  public jumpToTask(
    workflowId: string,
    requestBody: Record<string, Record<string, any>>,
    taskReferenceName?: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/jump/{taskReferenceName}',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'taskReferenceName': taskReferenceName,
      },
      body: requestBody,
      mediaType: 'application/json',
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
   * Removes the workflow from the system
   * @param workflowId
   * @param archiveWorkflow
   * @returns any OK
   * @throws ApiError
   */
  public delete1(
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
   * Restarts a completed workflow
   * @param workflowId
   * @param useLatestDefinitions
   * @returns void
   * @throws ApiError
   */
  public restart(
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
   * Retries the last failed task
   * @param workflowId
   * @param resumeSubworkflowTasks
   * @param retryIfRetriedByParent
   * @returns void
   * @throws ApiError
   */
  public retry(
    workflowId: string,
    resumeSubworkflowTasks: boolean = false,
    retryIfRetriedByParent: boolean = true,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/retry',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'resumeSubworkflowTasks': resumeSubworkflowTasks,
        'retryIfRetriedByParent': retryIfRetriedByParent,
      },
    });
  }
  /**
   * Skips a given task from a current running workflow
   * @param workflowId
   * @param taskReferenceName
   * @param skipTaskRequest
   * @returns any OK
   * @throws ApiError
   */
  public skipTaskFromWorkflow(
    workflowId: string,
    taskReferenceName: string,
    skipTaskRequest: SkipTaskRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/workflow/{workflowId}/skiptask/{taskReferenceName}',
      path: {
        'workflowId': workflowId,
        'taskReferenceName': taskReferenceName,
      },
      query: {
        'skipTaskRequest': skipTaskRequest,
      },
    });
  }
  /**
   * Update a workflow state by updating variables or in progress task
   * Updates the workflow variables, tasks and triggers evaluation.
   * @param workflowId
   * @param requestId
   * @param requestBody
   * @param waitUntilTaskRef
   * @param waitForSeconds
   * @returns WorkflowRun OK
   * @throws ApiError
   */
  public updateWorkflowAndTaskState(
    workflowId: string,
    requestId: string,
    requestBody: WorkflowStateUpdate,
    waitUntilTaskRef?: string,
    waitForSeconds: number = 10,
  ): CancelablePromise<WorkflowRun> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/state',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'requestId': requestId,
        'waitUntilTaskRef': waitUntilTaskRef,
        'waitForSeconds': waitForSeconds,
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
   * Gets the workflow tasks by workflow id
   * @param workflowId
   * @param start
   * @param count
   * @param status
   * @returns TaskListSearchResultSummary OK
   * @throws ApiError
   */
  public getExecutionStatusTaskList(
    workflowId: string,
    start?: number,
    count: number = 15,
    status?: Array<string>,
  ): CancelablePromise<TaskListSearchResultSummary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflow/{workflowId}/tasks',
      path: {
        'workflowId': workflowId,
      },
      query: {
        'start': start,
        'count': count,
        'status': status,
      },
    });
  }
  /**
   * Upgrade running workflow to newer version
   * Upgrade running workflow to newer version
   * @param workflowId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public upgradeRunningWorkflowToVersion(
    workflowId: string,
    requestBody: UpgradeWorkflowRequest,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/upgrade',
      path: {
        'workflowId': workflowId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update workflow variables
   * Updates the workflow variables and triggers evaluation.
   * @param workflowId
   * @param requestBody
   * @returns Workflow OK
   * @throws ApiError
   */
  public updateWorkflowState(
    workflowId: string,
    requestBody: Record<string, Record<string, any>>,
  ): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflow/{workflowId}/variables',
      path: {
        'workflowId': workflowId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
