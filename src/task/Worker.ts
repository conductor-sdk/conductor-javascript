import {Task, WorkerResult} from "./types"

export type ConductorWorker = (task: Task) => Promise<WorkerResult>
