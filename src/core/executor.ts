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

  public registerWorkflow(override: boolean, workflow: WorkflowDef) {
    return tryCatchReThrow(() =>
      this._client.metadataResource.create(workflow, override)
    );
  }

  public startWorkflow(workflowRequest: StartWorkflowRequest): Promise<string> {
    return tryCatchReThrow(()=>this._client.workflowResource.startWorkflow(workflowRequest));
  }

  public startWorkflows(
    workflowsRequest: StartWorkflowRequest[]
  ): Promise<string>[] {
    return tryCatchReThrow(()=>workflowsRequest.map(this.startWorkflow));
  }

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

  public getWorkflowStatus(
    executionId: string,
    includeOutput: boolean,
    includeVariables: boolean
  ) {
    return tryCatchReThrow(() => this._client.workflowResource.getWorkflowStatusSummary(
      executionId,
      includeOutput,
      includeVariables
    ));
  }

  public pause(executionId: string) {
    return tryCatchReThrow(()=>this._client.workflowResource.pauseWorkflow(executionId));
  }

  public reRun(
    executionId: string,
    rerunWorkflowRequest: Partial<RerunWorkflowRequest> = {}
  ) {
    return tryCatchReThrow(()=>this._client.workflowResource.rerun(
      executionId,
      rerunWorkflowRequest
    ));
  }

  public restart(executionId: string, useLatestDefinitions: boolean) {
    return tryCatchReThrow(()=>this._client.workflowResource.restart1(
      executionId,
      useLatestDefinitions
    ));
  }

  public resume(executionId: string) {
    return tryCatchReThrow(()=>this._client.workflowResource.resumeWorkflow(executionId));
  }

  public retry(executionId: string, resumeSubworkflowTasks: boolean) {
    return tryCatchReThrow(()=>this._client.workflowResource.retry1(
      executionId,
      resumeSubworkflowTasks
    ));
  }

  public search(
    start: number,
    size: number,
    query: string,
    freeText: string,
    sort: string = "",
    skipCache: boolean = false
  ) {
    const queryId = undefined;
    return tryCatchReThrow(()=>this._client.workflowResource.search1(
      queryId,
      start,
      size,
      sort,
      freeText,
      query,
      skipCache
    ));
  }

  public skipTasksFromWorkflow(
    executionId: string,
    taskReferenceName: string,
    skipTaskRequest: Partial<SkipTaskRequest>
  ) {
    return tryCatchReThrow(()=>this._client.workflowResource.skipTaskFromWorkflow(
      executionId,
      taskReferenceName,
      skipTaskRequest
    ));
  }

  public terminate(executionId: string, reason: string) {
    return tryCatchReThrow(()=>this._client.workflowResource.terminate1(executionId, reason));
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
    return tryCatchReThrow(()=>this._client.taskResource.updateTask1({
      ...taskOutput,
      ...taskUpdates,
    }));
  }

  public updateTaskByRefName(
    taskReferenceName: string,
    workflowInstanceId: string,
    status: TaskResult,
    taskOutput: Record<string, any>
  ) {
    return tryCatchReThrow(()=>this._client.taskResource.updateTask(
      workflowInstanceId,
      taskReferenceName,
      status,
      taskOutput
    ));
  }
}
