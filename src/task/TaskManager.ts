import {TaskClient} from "./TaskClient"
import os from "os"
import {RunnerOptions, TaskRunner} from "./TaskRunner"
import {ConductorLogger, DefaultLogger} from "../common/ConductorLogger"
import {ConductorWorker} from "./Worker"

export interface TaskManagerConfig {
  logger?: ConductorLogger
  options?: Partial<RunnerOptions>
}

const defaultRunnerOptions: Required<RunnerOptions> = {
  workerID: '',
  pollInterval: 1000,
  maxRunner: 1,
  domain: ''
}

function workerId (options: Partial<RunnerOptions>) {
  return options.workerID ?? os.hostname()
}

export class TaskManager {
  private tasks: Record<string, Array<TaskRunner>> = {}
  private readonly client: TaskClient
  private readonly logger: ConductorLogger
  private workers: Array<ConductorWorker>
  private runnerOptions: Required<RunnerOptions>

  constructor(client: TaskClient, workers: Array<ConductorWorker>, config: TaskManagerConfig = {}) {
    if (!workers) { throw new Error("No workers supplied to TaskManager. Please pass an array of workers.") }
    this.client = client
    this.logger = config.logger ?? new DefaultLogger()
    this.workers = workers
    const providedOptions = config.options ?? {}
    this.runnerOptions = {
      ...defaultRunnerOptions,
      workerID: workerId(providedOptions),
    }
  }

  startPolling = () => {
    const maxRunner = this.runnerOptions.maxRunner ?? 1
    this.workers.forEach(worker => {
      this.tasks[worker.taskDefName] = []
      for (let i = 0; i < maxRunner; i++) {
        const runner = new TaskRunner({
          worker,
          options: this.runnerOptions,
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
    const providedId = this.runnerOptions.workerID
    return providedId ?? os.hostname()
  }
}
