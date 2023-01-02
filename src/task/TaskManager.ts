import os from "os"
import {TaskRunner} from "./TaskRunner"
import {ConductorLogger, DefaultLogger} from "../common"
import {ConductorWorker} from "./Worker"
import {ConductorClient} from "../common/open-api"

export interface TaskManagerOptions {
  workerID: string
  domain: string | undefined
  pollInterval?: number,
  concurrency?: number
}

export interface TaskManagerConfig {
  logger?: ConductorLogger
  options?: Partial<TaskManagerOptions>
}

const defaultManagerOptions: Required<TaskManagerOptions> = {
  workerID: '',
  pollInterval: 1000,
  domain: undefined,
  concurrency: 1
}

function workerId (options: Partial<TaskManagerOptions>) {
  return options.workerID ?? os.hostname()
}

/**
 * Responsible for initializing and managing the runners that poll and work different task queues.
 */
export class TaskManager {
  private tasks: Record<string, Array<TaskRunner>> = {}
  private readonly client: ConductorClient
  private readonly logger: ConductorLogger
  private workers: Array<ConductorWorker>
  private readonly taskManageOptions: Required<TaskManagerOptions>

  constructor(client: ConductorClient, workers: Array<ConductorWorker>, config: TaskManagerConfig = {}) {
    if (!workers) { throw new Error("No workers supplied to TaskManager. Please pass an array of workers.") }
    this.client = client
    this.logger = config.logger ?? new DefaultLogger()
    this.workers = workers
    const providedOptions = config.options ?? {}
    this.taskManageOptions = {
      ...defaultManagerOptions,
      ...providedOptions,
      workerID: workerId(providedOptions),
    }
  }

  startPolling = () => {
    this.workers.forEach(worker => {
      this.tasks[worker.taskDefName] = []
      const options = {
        ...this.taskManageOptions,
        concurrency: worker.concurrency ?? this.taskManageOptions.concurrency,
        domain: worker.domain ?? this.taskManageOptions.domain
      }
      this.logger.debug(`Starting taskDefName=${worker.taskDefName} concurrency=${options.concurrency} domain=${options.domain}`)
      for (let i = 0; i < options.concurrency; i++) {
        const runner = new TaskRunner({
          worker,
          options,
          taskResource: this.client.taskResource,
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
      this.tasks[taskType] = []
    }
  }
}
