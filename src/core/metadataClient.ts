import {
  ConductorClient,
  TaskDef,
} from "../common";
import { tryCatchReThrow } from "./helpers";

export class MetadataClient {
  public readonly _client: ConductorClient;

  constructor(client: ConductorClient) {
    this._client = client;
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

  /**
   * Update an existing task definition
   *
   * @param taskDef
   * @returns
   */
  public updateTask(taskDef: TaskDef): Promise<void> {
    return tryCatchReThrow(() =>
      this._client.metadataResource.updateTaskDef(taskDef)
    );
  }
}
