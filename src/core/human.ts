import {
  ConductorClient,
  HumanTaskSearch,
  HumanTaskEntry,
  HumanTaskTemplate,
} from "../common";
import { errorMapper, tryCatchReThrow } from "./helpers";

export class HumanExecutor {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
  }
  /**
   * Takes a set of filter parameters. return matches of human tasks for that set of parameters
   * @param state
   * @param assignee
   * @param assigneeType
   * @param claimedBy
   * @param taskName
   * @param freeText
   * @param includeInputOutput
   * @returns Promise<HumanTaskEntry[]>
   */
  public async getTasksByFilter(
    searchParams: HumanTaskSearch
  ): Promise<HumanTaskEntry[]> {
    const response = await tryCatchReThrow(() =>
      this._client.humanTask.search(searchParams)
    );
    if (response.results != undefined) {
      return response.results;
    }
    return [];
  }

  /**
   * Returns task for a given task id
   * @param taskId
   * @returns
   */
  public getTaskById(taskId: string): Promise<HumanTaskEntry> {
    return tryCatchReThrow(() => this._client.humanTask.getTask1(taskId!));
  }

  /**
   * Assigns taskId to assignee. If the task is already assigned to another user, this will fail.
   * @param taskId
   * @param assignee
   * @returns
   */
  public async claimTaskAsExternalUser(taskId: string, assignee: string) {
    try {
      await this._client.humanTask.assignAndClaim(taskId, assignee);
    } catch (error: any) {
      throw errorMapper(error);
    }
  }

  /**
   * Claim task as conductor user
   * @param taskId
   * @returns
   */
  public async claimTaskAsConductorUser(taskId: string) {
    try {
      await this._client.humanTask.claimTask(taskId);
    } catch (error: any) {
      throw errorMapper(error);
    }
  }

  /**
   * Claim task as conductor user
   * @param taskId
   * @param assignee
   * @returns
   */
  public async releaseTask(taskId: string) {
    try {
      await this._client.humanTask.releaseTask(taskId);
    } catch (error: any) {
      throw errorMapper(error);
    }
  }

  /**
   * Returns a HumanTaskTemplateEntry for a given templateId
   * @param templateId
   * @returns
   */
  public async getTemplateById(
    name: string,
    version: number
  ): Promise<HumanTaskTemplate> {
    return tryCatchReThrow(() =>
      this._client.humanTask.getTemplateByNameAndVersion(name, version)
    );
  }

  /**
   * Takes a taskId and a partial body. will update with given body
   * @param taskId
   * @param requestBody
   */
  public async updateTaskOutput(
    taskId: string,
    requestBody: Record<string, Record<string, any>>
  ) {
    try {
      await this._client.humanTask.updateTaskOutput(taskId, requestBody, false);
    } catch (error: any) {
      throw errorMapper(error);
    }
  }

  /**
   * Takes a taskId and an optional partial body. will complete the task with the given body
   * @param taskId
   * @param requestBody
   */
  public async completeTask(
    taskId: string,
    requestBody: Record<string, Record<string, any>> = {}
  ) {
    try {
      await this._client.humanTask.updateTaskOutput(taskId, requestBody, true);
    } catch (error: any) {
      throw errorMapper(error);
    }
  }
}
