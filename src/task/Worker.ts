
// right now this is very much a functional interface
// i'm not sure if we want to lean into that or if we want to do something more strongly typed like python

import {Task, TaskResult} from "../common/open-api"

// https://github.com/conductor-sdk/conductor-python/blob/main/src/conductor/client/worker/worker_interface.py#L7
export interface ConductorWorker {
  taskDefName: string
  execute: (task: Task) => Promise<Omit<TaskResult, "workflowInstanceId" | "taskId">>
  domain?: string
  /*
  Number of polling instances to run concurrently
   */
  concurrency?: number
}
