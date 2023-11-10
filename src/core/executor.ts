import { ConductorClient, WorkflowDef } from "../common";
import {
  Workflow,
  Task,
  RerunWorkflowRequest,
  StartWorkflowRequest,
  SkipTaskRequest,
  WorkflowRun,
  WorkflowStatus,
  ScrollableSearchResultWorkflowSummary,
} from "../common/open-api";
import { TaskResultStatus } from "./types";
import { errorMapper, tryCatchReThrow } from "./helpers";

const RETRY_TIME_IN_MILLISECONDS = 10000;

export class WorkflowExecutor {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
  }
  /**
   * Will persist a workflow in conductor
   * @param override If true will override the existing workflow with the definition
   * @param workflow Complete workflow definition
   * @returns null
   */

  public registerWorkflow(
    override: boolean,
    workflow: WorkflowDef
  ): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.metadataResource.create(workflow, override)
    );
  }
  /**
   * Takes a StartWorkflowRequest. returns a Promise<string> with the workflowInstanceId of the running workflow
   * @param workflowRequest
   * @returns
   */
  public startWorkflow(workflowRequest: StartWorkflowRequest): Promise<string> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.startWorkflow(workflowRequest)
    );
  }

  /**
   * Execute a workflow synchronously. returns a Promise<WorkflowRun> with details of the running workflow
   * @param workflowRequest
   * @returns
   */
  public executeWorkflow(
    workflowRequest: StartWorkflowRequest,
    name: string,
    version: number,
    requestId: string,
    waitUntilTaskRef: string = ""
  ): Promise<WorkflowRun> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.executeWorkflow(
        workflowRequest,
        name,
        version,
        requestId,
        waitUntilTaskRef
      )
    );
  }

  public startWorkflows(
    workflowsRequest: StartWorkflowRequest[]
  ): Promise<string>[] {
    return tryCatchReThrow(() => workflowsRequest.map(this.startWorkflow));
  }
  /**
   * Takes an workflowInstanceId and an includeTasks and an optional retry parameter returns the whole execution status.
   * If includeTasks flag is provided. Details of tasks execution will be returned as well,
   * retry specifies the amount of retrys before throwing an error.
   *
   * @param workflowInstanceId
   * @param includeTasks
   * @param retry
   * @returns
   */
  public async getWorkflow(
    workflowInstanceId: string,
    includeTasks: boolean,
    retry: number = 0
  ): Promise<Workflow> {
    try {
      const workflowStatus =
        await this._client.workflowResource.getExecutionStatus(
          workflowInstanceId,
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

    return this.getWorkflow(workflowInstanceId, includeTasks, retry - 1);
  }

  /**
   *  Returns a summary of the current workflow status.
   *
   * @param workflowInstanceId current running workflow
   * @param includeOutput flag to include output
   * @param includeVariables flag to include variable
   * @returns Promise<WorkflowStatus>
   */
  public getWorkflowStatus(
    workflowInstanceId: string,
    includeOutput: boolean,
    includeVariables: boolean
  ): Promise<WorkflowStatus> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.getWorkflowStatusSummary(
        workflowInstanceId,
        includeOutput,
        includeVariables
      )
    );
  }

  /**
   * Pauses a running workflow
   * @param workflowInstanceId current workflow execution
   * @returns
   */
  public pause(workflowInstanceId: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.pauseWorkflow(workflowInstanceId)
    );
  }
  /**
   * Reruns workflowInstanceId workflow. with new parameters
   *
   * @param workflowInstanceId current workflow execution
   * @param rerunWorkflowRequest Rerun Workflow Execution Request
   * @returns
   */
  public reRun(
    workflowInstanceId: string,
    rerunWorkflowRequest: Partial<RerunWorkflowRequest> = {}
  ): Promise<string> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.rerun(
        workflowInstanceId,
        rerunWorkflowRequest
      )
    );
  }

  /**
   * Restarts workflow with workflowInstanceId, if useLatestDefinition uses last defintion
   * @param workflowInstanceId
   * @param useLatestDefinitions
   * @returns
   */
  public restart(
    workflowInstanceId: string,
    useLatestDefinitions: boolean
  ): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.restart1(
        workflowInstanceId,
        useLatestDefinitions
      )
    );
  }

  /**
   * Resumes a previously paused execution
   *
   * @param workflowInstanceId Running workflow workflowInstanceId
   * @returns
   */
  public resume(workflowInstanceId: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.resumeWorkflow(workflowInstanceId)
    );
  }

  /**
   * Retrys workflow from last failing task
   * if resumeSubworkflowTasks is true will resume tasks in spawned subworkflows
   *
   * @param workflowInstanceId
   * @param resumeSubworkflowTasks
   * @returns
   */
  public retry(
    workflowInstanceId: string,
    resumeSubworkflowTasks: boolean
  ): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.retry1(
        workflowInstanceId,
        resumeSubworkflowTasks
      )
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
  ): Promise<ScrollableSearchResultWorkflowSummary> {
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
   * @param workflowInstanceId
   * @param taskReferenceName
   * @param skipTaskRequest
   * @returns
   */
  public skipTasksFromWorkflow(
    workflowInstanceId: string,
    taskReferenceName: string,
    skipTaskRequest: Partial<SkipTaskRequest>
  ): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.skipTaskFromWorkflow(
        workflowInstanceId,
        taskReferenceName,
        skipTaskRequest
      )
    );
  }
  /**
   * Takes an workflowInstanceId, and terminates a running workflow
   * @param workflowInstanceId
   * @param reason
   * @returns
   */
  public terminate(workflowInstanceId: string, reason: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.workflowResource.terminate1(workflowInstanceId, reason)
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
    taskStatus: TaskResultStatus,
    outputData: Record<string, any> // TODO this can be typed.
  ): Promise<string> {
    const taskUpdates = {
      status: taskStatus,
      taskId,
      workflowInstanceId,
    };
    return tryCatchReThrow(() =>
      this._client.taskResource.updateTask1({
        outputData,
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
    status: TaskResultStatus,
    taskOutput: Record<string, any>
  ): Promise<string> {
    return tryCatchReThrow(() =>
      this._client.taskResource.updateTask(
        workflowInstanceId,
        taskReferenceName,
        status,
        taskOutput
      )
    );
  }

  /**
   *
   * @param taskId
   * @returns
   */
  public getTask(taskId: string): Promise<Task> {
    return tryCatchReThrow(() => this._client.taskResource.getTask(taskId));
  }
}
