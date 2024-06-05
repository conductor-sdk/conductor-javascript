import {
  ConductorClient,
  SaveScheduleRequest,
  SearchResultWorkflowScheduleExecutionModel,
} from "../common";
import type { TaskDef } from '../common/open-api/models/TaskDef';
import { tryCatchReThrow } from "./helpers";

export class TaskClient {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
  }

  /**
   * Searches for existing scheduler execution based on below parameters
   *
   * @param start
   * @param size
   * @param sort
   * @param freeText
   * @param query
   * @returns SearchResultWorkflowScheduleExecutionModel
   */
  public search(
    start: number,
    size: number,
    sort: string = "",
    freeText: string,
    query: string
  ): Promise<SearchResultWorkflowScheduleExecutionModel> {
    return tryCatchReThrow(() =>
      this._client.taskResource.search(
        start,
        size,
        sort,
        freeText,
        query
      )
    );
  }

  /**
   * Get an existing schedule by Id
   * @param taskId
   * @returns SaveScheduleRequest
   */
  public getTask(taskId: string): Promise<SaveScheduleRequest> {
    return tryCatchReThrow(() =>
      this._client.taskResource.getTask(taskId)
    );
  }

  /**
   * Unregisters an existing task definition by name
   *
   * @param name
   * @returns
   */
  public unregisterTask(name: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.metadataResource.unregisterTaskDef(name)
    );
  }

  /**
   * Registers a new task definition
   *
   * @param taskDef
   * @returns
   */
  public registerTask(taskDef: TaskDef): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.metadataResource.registerTaskDef([taskDef])
    );
  }

  // /**
  //  * Get all existing workflow schedules and optionally filter by workflow name
  //  * @param workflowName
  //  * @returns Array<WorkflowSchedule>
  //  */
  // public getAllSchedules(
  //   workflowName?: string
  // ): Promise<Array<WorkflowSchedule>> {
  //   return tryCatchReThrow(() =>
  //     this._client.taskResource.getAllSchedules(workflowName)
  //   );
  // }
}
