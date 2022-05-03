import {hostname} from "os"
import {Task, TaskResult} from "./types"

export interface ConductorWorkerBase {
  execute(task: Task) : Promise<TaskResult>
  getIdentity() : string
}

export abstract class Worker implements ConductorWorkerBase {
  abstract execute(task: Task): Promise<TaskResult>

  getIdentity(): string {
    return hostname()
  }
}
