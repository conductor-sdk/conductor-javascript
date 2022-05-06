import {TaskClient} from "./TaskClient"
import {TaskRunner, RunnerArgs} from "./TaskRunner"
import {ConductorLogger, DefaultLogger } from "../common/ConductorLogger"

export class TaskManager {
  private tasks: Record<string, TaskRunner> = {}
  private readonly client: TaskClient
  private readonly logger: ConductorLogger

  constructor(client: TaskClient, logger?: ConductorLogger) {
    this.client = client
    this.logger = logger ?? new DefaultLogger()
  }

  // TODO(@ntomlin) simplify the options here?
  register = (taskType: string, callback: RunnerArgs["callback"], options: Omit<RunnerArgs, "client" | "logger" | "callback">) => {
    if (!taskType) {
      throw new Error('Task type is required to register')
    }

    if (this.tasks[taskType]) {
      throw new Error(`Task "${taskType}" is already registered`)
    }

    this.tasks[taskType] = new TaskRunner({
      client: this.client,
      taskType,
      watcherOptions: {
        ...options,
        workerID: 'TODO'
      },
      callback,
      logger: this.logger
    })
    return this.tasks[taskType]
  }

  startPolling = async () => {
    const promises = []
    for (const taskType in this.tasks) {
      if (!this.tasks[taskType].isPolling) {
        promises.push(
          this.tasks[taskType].startPolling()
        )
      }
    }
    return Promise.all(promises)
  }

  stopPolling = () => {
    for (const taskType in this.tasks) {
      if (this.tasks[taskType].isPolling) {
        this.tasks[taskType].stopPolling()
      }
    }
  }
}
