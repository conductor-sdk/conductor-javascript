import {setTimeout} from "timers/promises"
import {TaskClient} from "./TaskClient"
import {ConductorLogger} from "../common/ConductorLogger"
import {Task, TaskResultStatus} from "./types"
import {ConductorWorker} from "./Worker"

const DEFAULT_ERROR_MESSAGE = "An unknown error occurred"

export interface RunnerOptions {
  workerID: string
  domain?: string
  pollInterval?: number,
  maxRunner?: number
}

const DEFAULT_OPTIONS: Required<RunnerOptions> = {
  workerID: '',
  pollInterval: 1000,
  maxRunner: 1,
  domain: ''
}

export interface RunnerArgs {
  worker: ConductorWorker,
  client: TaskClient,
  options: RunnerOptions,
  logger: ConductorLogger
}

export class TaskRunner {
  #isPolling = false
  #client: TaskClient
  #worker: ConductorWorker
  #logger: ConductorLogger
  #options: Required<RunnerOptions>

  constructor({worker, client, options, logger} : RunnerArgs) {
    this.#client = client
    this.#logger = logger
    this.#worker = worker
    this.#options = {
      ...DEFAULT_OPTIONS,
      ...options
    }
  }

  startPolling = () => {
    if (this.#isPolling) {
      throw new Error('Runner is already started')
    }

    this.#isPolling = true
    return this.#poll()
  }

  stopPolling = () => {
    this.#isPolling = false
  }

  #poll = async () => {
    while (this.#isPolling) {
      try {
        const { workerID } = this.#options
        const task = await this.#client.pollTask(this.#worker.taskDefName, workerID, this.#options.domain)
        if (task && task.taskId) {
          await this.#executeTask(task)
        } else {
          this.#logger.debug(`No tasks for ${this.#worker.taskDefName}`)
        }
      } catch (unknownError: unknown) {
        this.#handleUnknownError(unknownError)
      }

      await setTimeout(this.#options.pollInterval)
    }
  }

  #executeTask = async (task: Task) => {
    try {
      const result = await this.#worker.execute(task)
      await this.#client.updateTask({
        ...result,
        workflowInstanceId: task.workflowInstanceId,
        taskId: task.taskId,
      })
      this.#logger.debug(`Finished polling for task ${task.taskId}`)
    } catch (error: unknown) {
      this.#logger.error(`Error polling and executing ${task.taskId}`, error)
      await this.#client.updateTask({
        workflowInstanceId: task.workflowInstanceId,
        taskId: task.taskId,
        reasonForIncompletion: (error as Record<string, string>)?.message ?? DEFAULT_ERROR_MESSAGE,
        status: TaskResultStatus.FAILED,
        outputData: {}
      })
    }
  }

  #handleUnknownError = (unknownError: unknown) => {
    let message = ""
    let stack: string | undefined = ""
    if ((unknownError as Error).stack) { stack = (unknownError as Error).stack}
    if ((unknownError as Error).message) { message = (unknownError as Error).message}
    this.#logger.error('Polling connection failed for task type: %s, error: %s, stack: %s', this.#worker.taskDefName, message, stack)
  }
}
