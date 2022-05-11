import {TaskClient} from "./TaskClient"
import os from "os"
import {RunnerOptions, TaskRunner} from "./TaskRunner"
import {ConductorLogger, DefaultLogger} from "../common/ConductorLogger"
import {ConductorWorker} from "./Worker"

export interface TaskManagerConfig {
  logger?: ConductorLogger
  options: Partial<RunnerOptions>
}

export class TaskManager {
  private tasks: Record<string, Array<TaskRunner>> = {}
  private readonly client: TaskClient
  private readonly logger: ConductorLogger
  private workers: Array<ConductorWorker>
  private options: Partial<RunnerOptions>

  constructor(client: TaskClient, workers: Array<ConductorWorker>, config: TaskManagerConfig) {
    this.client = client
    this.logger = config.logger ?? new DefaultLogger()
    this.workers = workers
    this.options = config.options
  }

  startPolling = () => {
    const options = {
      ...this.options,
      workerID: this.#workerId()
    }
    const maxRunner = this.options.maxRunner ?? 1
    this.workers.forEach(worker => {
      this.tasks[worker.taskDefName] = []
      for (let i = 0; i < maxRunner; i++) {
        const runner = new TaskRunner({
          worker,
          options,
          client: this.client,
          logger: this.logger
        })
        // TODO(@ntomlin): right now we aren't handling these promises
        // which will inevitably lead to chaos
        runner.startPolling()
        this.tasks[worker.taskDefName].push(runner)
      }
    })
  }

  stopPolling = () => {
    for (const taskType in this.tasks) {
      this.tasks[taskType].forEach(runner => runner.stopPolling())
    }
  }

  #workerId = () : string => {
    const providedId = this.options.workerID
    return providedId ?? os.hostname()
  }
}
