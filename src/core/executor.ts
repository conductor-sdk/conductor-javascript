import { ConductorClient, WorkflowDef } from "../common";
import { Workflow } from "../common/open-api";
import {
  StartWorkflowRequest,
  RerunWorkflowRequest,
  SkipTaskRequest,
  TaskResult,
  ConductorError,
} from "./types";

const RETRY_TIME_IN_MILLISECONDS = 10000;

const errorMapper = (error: any): ConductorError =>
  new ConductorError(error?.body?.message, error);

const tryCatchReThrow = (fn: Function) => {
  try {
    return fn();
  } catch (error) {
    throw errorMapper(error);
  }
};

export class WorkflowExecutor {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
  }
  /**
   * Will persist a workflow in consuctor
   * @param override If true will override the existing workflow with the definition
   * @param workflow Complete workflow defintion
   * @returns null
   */

  public registerWorkflow(override: boolean, workflow: WorkflowDef) {
    return tryCatchReThrow(() =>
      this._client.metadataResource.create(workflow, override)
    );
  }
  /**
   * Takes a StartWorkflowRequest. returns a Promise<string> with the executionId of the running workflow
   * @param workflowRequest
   * @returns
   */
  public startWorkflow(workflowRequest: StartWorkflowRequest): Promise<string> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.startWorkflow(workflowRequest)
    );
  }

  public startWorkflows(
    workflowsRequest: StartWorkflowRequest[]
  ): Promise<string>[] {
    return tryCatchReThrow(() => workflowsRequest.map(this.startWorkflow));
  }
  /**
   * Takes an executionId and an includeTasks and an optional retry parameter returns the whole execution status.
   * If includeTasks flag is provided. Details of tasks execution will be returned as well,
   * retry specifies the amount of retrys before throwing an error.
   *
   * @param executionId
   * @param includeTasks
   * @param retry
   * @returns
   */
  public async getWorkflow(
    executionId: string,
    includeTasks: boolean,
    retry: number = 0
  ): Promise<Workflow> {
    try {
      const workflowStatus =
        await this._client.workflowResource.getExecutionStatus(
          executionId,
          includeTasks
        );
      return workflowStatus;
    } catch (error: any) {
      if (![500, 404, 403].includes(error.status) || retry === 0) {
        throw errorMapper(error);
      }
    }

    await new Promise((res) =>
      setTimeout(() => res(true), RETRY_TIME_IN_MILLISECONDS)
    );

    return this.getWorkflow(executionId, includeTasks, retry - 1);
  }

  /**
   *  Returns a summary of the current workflow status.
   *
   * @param executionId current running workflow
   * @param includeOutput flag to include output
   * @param includeVariables flag to include variable
   * @returns Promise<WorkflowStatus>
   */
  public getWorkflowStatus(
    executionId: string,
    includeOutput: boolean,
    includeVariables: boolean
  ) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.getWorkflowStatusSummary(
        executionId,
        includeOutput,
        includeVariables
      )
    );
  }

  /**
   * Pauses a running workflow
   * @param executionId current workflow execution
   * @returns
   */
  public pause(executionId: string) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.pauseWorkflow(executionId)
    );
  }
  /**
   * Reruns executionId workflow. with new parameters
   *
   * @param executionId current workflow execution
   * @param rerunWorkflowRequest Rerun Workflow Execution Request
   * @returns
   */
  public reRun(
    executionId: string,
    rerunWorkflowRequest: Partial<RerunWorkflowRequest> = {}
  ) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.rerun(executionId, rerunWorkflowRequest)
    );
  }

  /**
   * Restarts workflow with executionId, if useLatestDefinition uses last defintion
   * @param executionId
   * @param useLatestDefinitions
   * @returns
   */
  public restart(executionId: string, useLatestDefinitions: boolean) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.restart1(executionId, useLatestDefinitions)
    );
  }

  /**
   * Resumes a previously paused execution
   *
   * @param executionId Running workflow executionId
   * @returns
   */
  public resume(executionId: string) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.resumeWorkflow(executionId)
    );
  }

  /**
   * Retrys workflow from last failing task
   * if resumeSubworkflowTasks is true will resume tasks in spawned subworkflows
   *
   * @param executionId
   * @param resumeSubworkflowTasks
   * @returns
   */
  public retry(executionId: string, resumeSubworkflowTasks: boolean) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.retry1(executionId, resumeSubworkflowTasks)
    );
  }
  /**
   * Searches for existing workflows given the following querys
   *
   * @param start
   * @param size
   * @param query
   * @param freeText
   * @param sort
   * @param skipCache
   * @returns
   */
  public search(
    start: number,
    size: number,
    query: string,
    freeText: string,
    sort: string = "",
    skipCache: boolean = false
  ) {
    const queryId = undefined;
    return tryCatchReThrow(() =>
      this._client.workflowResource.search1(
        queryId,
        start,
        size,
        sort,
        freeText,
        query,
        skipCache
      )
    );
  }
  /**
   * Skips a task of a running workflow.
   * by providing a skipTaskRequest you can set the input and the output of the skipped tasks
   * @param executionId
   * @param taskReferenceName
   * @param skipTaskRequest
   * @returns
   */
  public skipTasksFromWorkflow(
    executionId: string,
    taskReferenceName: string,
    skipTaskRequest: Partial<SkipTaskRequest>
  ) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.skipTaskFromWorkflow(
        executionId,
        taskReferenceName,
        skipTaskRequest
      )
    );
  }
/**
 * Takes an executionId, and terminates a running workflow
 * @param executionId 
 * @param reason 
 * @returns 
 */
  public terminate(executionId: string, reason: string) {
    return tryCatchReThrow(() =>
      this._client.workflowResource.terminate1(executionId, reason)
    );
  }

  /**
   * Takes a taskId and a workflowInstanceId. Will update the task for the corresponding taskId
   * @param taskId 
   * @param workflowInstanceId 
   * @param taskStatus 
   * @param taskOutput 
   * @returns 
   */
  public updateTask(
    taskId: string,
    workflowInstanceId: string,
    taskStatus: TaskResult,
    taskOutput: Record<string, any> // TODO this can be typed.
  ) {
    const taskUpdates = {
      status: taskStatus,
      taskId,
      workflowInstanceId,
    };
    return tryCatchReThrow(() =>
      this._client.taskResource.updateTask1({
        ...taskOutput,
        ...taskUpdates,
      })
    );
  }
/**
 * Updates a task by reference Name
 * @param taskReferenceName 
 * @param workflowInstanceId 
 * @param status 
 * @param taskOutput 
 * @returns 
 */
  public updateTaskByRefName(
    taskReferenceName: string,
    workflowInstanceId: string,
    status: TaskResult,
    taskOutput: Record<string, any>
  ) {
    return tryCatchReThrow(() =>
      this._client.taskResource.updateTask(
        workflowInstanceId,
        taskReferenceName,
        status,
        taskOutput
      )
    );
  }
}
