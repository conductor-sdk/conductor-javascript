import {TaskClient} from "./TaskClient"
import {Watcher, WatcherArgs} from "./Watcher"
import {ConductorLogger, DefaultLogger } from "../common/ConductorLogger"

export class TaskRunner {
  private tasks: Record<string, Watcher> = {}
  private readonly client: TaskClient
  private readonly logger: ConductorLogger

  constructor(client: TaskClient, logger?: ConductorLogger) {
    this.client = client
    this.logger = logger ?? new DefaultLogger()
  }

  // TODO(@ntomlin) simplify the options here?
  registerWatcher = (taskType: string, callback: WatcherArgs["callback"], options: Omit<WatcherArgs, "client" | "logger" | "callback">) => {
    if (!taskType) {
      throw new Error('Task type is required for registering watcher')
    }

    if (this.tasks[taskType]) {
      throw new Error(`Task "${taskType}" is already registered`)
    }

    this.tasks[taskType] = new Watcher({
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
