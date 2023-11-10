import {
  ConductorClient,
  SaveScheduleRequest,
  SearchResultWorkflowScheduleExecutionModel,
  WorkflowSchedule,
} from "../common";
import { tryCatchReThrow } from "./helpers";

export class SchedulerClient {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
  }

  /**
   * Create or update a schedule for a specified workflow with a corresponding start workflow request
   * @param requestBody
   * @returns
   */
  public registerSchedule(param: SaveScheduleRequest): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.schedulerResource.saveSchedule(param)
    );
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
      this._client.schedulerResource.searchV21(
        start,
        size,
        sort,
        freeText,
        query
      )
    );
  }

  /**
   * Get an existing schedule by name
   * @param name
   * @returns SaveScheduleRequest
   */
  public get(name: string): Promise<SaveScheduleRequest> {
    return tryCatchReThrow(() =>
      this._client.schedulerResource.getSchedule(name)
    );
  }

  /**
   * Pauses an existing schedule by name
   * @param name
   * @returns
   */
  public pause(name: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.schedulerResource.pauseSchedule(name)
    );
  }

  /**
   * Resume a paused schedule by name
   *
   * @param name
   * @returns
   */
  public startResume(name: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.schedulerResource.resumeSchedule(name)
    );
  }

  /**
   * Deletes an existing scheduler execution by name
   *
   * @param name
   * @returns
   */
  public delete(name: string): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.schedulerResource.deleteSchedule(name)
    );
  }


  /**
   * Get all existing workflow schedules and optionally filter by workflow name 
   * @param workflowName
   * @returns Array<WorkflowSchedule>
   */
  public getAll(workflowName?: string):Promise<Array<WorkflowSchedule>>{
    return tryCatchReThrow(()=>
        this._client.schedulerResource.getAllSchedules(workflowName)
    )
  }

}
