import { ConductorClient, WorkflowDef } from "../common";

interface StartWorkflowRequest<I = Record<string, any>> {
  name: string;
  version: number;
  correlationId?: string;
  input?: I;
  taskToDomain?: Record<string, string>;
  workflowDef?: WorkflowDef; // TODO ask someone
  externalInputPayloadStoragePath?: string;
  priority?: number;
}

interface RerunWorkflowRequest<I = Record<string, any>> {
  rerunFromWorkflowId: string;
  workflowInput: I;
  rerunFromTaskId?: Record<string, any>;
  taskInput: Record<string, any>;
  correlationId: string;
}

interface SkipTaskRequest {
  taskInput: Record<string, any>;
  taskOutput: Record<string, any>;
}

enum TaskResult {
  IN_PROGRESS = "IN_PROGRESS",
  FAILED = "FAILED",
  FAILED_WITH_TERMINAL_ERROR = "FAILED_WITH_TERMINAL_ERROR",
  COMPLETED = "COMPLETED",
}

export class WorkflowExecutor {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
  }

  public registerWorkflow(override: boolean, workflow: WorkflowDef) {
    this._client.metadataResource.create(workflow, override);
  }

  // I have missing params here. update and check
  public startWorkflow(workflowRequest: StartWorkflowRequest): Promise<string> {
    return this._client.workflowResource.startWorkflow(
      workflowRequest.name,
      workflowRequest.input || {},
      workflowRequest.version,
      workflowRequest.correlationId,
      workflowRequest.priority
    );
  }

  public startWorkflows(
    workflowsRequest: StartWorkflowRequest[]
  ): Promise<string>[] {
    return workflowsRequest.map(this.startWorkflow);
  }
  // TODO wait for running workflows....

  public getWorkflowRetry(
    retry: number,
    executionId: string,
    includeTasks: boolean
  ) {
    // missing retry logic
    const workflowStatus = this._client.workflowResource.getExecutionStatus(
      executionId,
      includeTasks
    );
    return workflowStatus;
  }

  public getWorkflow(executionId: string, includeTasks: boolean) {
    // missing retry logic
    const workflowStatus = this._client.workflowResource.getExecutionStatus(
      executionId,
      includeTasks
    );
    return workflowStatus;
  }

  public getWorkflowStatus(
    executionId: string,
    includeOutput: boolean,
    includeVariables: boolean
  ) {
    return this._client.workflowResource.getWorkflowStatusSummary(
      executionId,
      includeOutput,
      includeVariables
    );
  }

  public pause(executionId: string) {
    return this._client.workflowResource.pauseWorkflow1(executionId);
  }

  public reRun(
    executionId: string,
    rerunWorkflowRequest: Partial<RerunWorkflowRequest> = {}
  ) {
    return this._client.workflowResource.rerun(
      executionId,
      rerunWorkflowRequest
    );
  }

  public restart(executionId: string, useLatestDefinitions: boolean) {
    return this._client.workflowResource.restart(
      executionId,
      useLatestDefinitions
    );
  }

  public resume(executionId: string) {
    return this._client.workflowResource.resumeWorkflow(executionId);
  }

  public retry(executionId: string, resumeSubworkflowTasks: boolean) {
    return this._client.workflowResource.retry1(
      executionId,
      resumeSubworkflowTasks
    );
  }

  // TODO this can be typed to.
  public search(start: number, size: number, query: string, freeText: string) {
    const sort = undefined;
    const skipCache = undefined;
    // Missing query Id and sort?
    return this._client.workflowResource.search(
      undefined,
      start,
      size,
      sort,
      freeText,
      query,
      skipCache
    );
  }

  public skipTasksFromWorkflow(
    executionId: string,
    taskReferenceName: string,
    skipTaskRequest: Partial<SkipTaskRequest>
  ) {
    return this._client.workflowResource.skipTaskFromWorkflow(
      executionId,
      taskReferenceName,
      skipTaskRequest
    );
  }

  public terminate(executionId: string, reason: string) {
    return this._client.workflowResource.terminate(executionId, reason);
  }

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
    return this._client.taskResource.updateTask({
      ...taskOutput,
      ...taskUpdates,
    });
  }

  public updateTaskByRefName(
    taskReferenceName: string,
    workflowInstanceId: string,
    status: TaskResult,

    taskOutput: Record<string, any> // TODO this can be typed.
  ) {
    return this._client.taskResource.updateTask1(
      workflowInstanceId,
      taskReferenceName,
      status,
      taskOutput
    );
  }
}
