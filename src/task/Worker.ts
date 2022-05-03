import {Task, TaskResult} from "./types"

export interface ConductorWorkerBase {
  execute(task: Task) : Promise<TaskResult>
}

export abstract class Worker implements ConductorWorkerBase {
  abstract execute(task: Task): Promise<TaskResult>
}
