import {TaskClient} from "./TaskClient"
import {TaskRunner} from "./TaskRunner"
import {ConductorLogger, DefaultLogger} from "../common/ConductorLogger"
import {ConductorWorker} from "./Worker"

export class TaskManager {
  private tasks: Record<string, TaskRunner> = {}
  private readonly client: TaskClient
  private readonly logger: ConductorLogger
  private workers: Array<ConductorWorker>

  constructor(client: TaskClient, workers: Array<ConductorWorker>, logger?: ConductorLogger) {
    this.client = client
    this.logger = logger ?? new DefaultLogger()
    this.workers = workers
  }

  startPolling = async () => {
    // TODO: handle concurrency here via spinning up `n` parallel threads?
    const promises = this.workers.map(worker => {
      const runner = new TaskRunner({
        client: this.client,
        taskType: worker.taskDefName,
        runnerOptions: {
          workerID: 'TODO'
        },
        worker,
        logger: this.logger
      })
      return runner.startPolling()
    })

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
