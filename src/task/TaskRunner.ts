import {TaskClient} from "./TaskClient"
import {ConductorLogger} from "../common/ConductorLogger"
import {Task, TaskResult, TaskResultStatus} from "./types"
import {sleep} from "./sleep"

const DEFAULT_ERROR_MESSAGE = "An unknown error occurred"

const MAX_32_INT = 2147483647
interface RunnerOptions {
  workerID: string
  pollingIntervals?: number,
  pollFailureBackoffFactor?: number,
  maxPollInterval?: number,
  maxRunner?: number,
}

const DEFAULT_OPTIONS: Required<RunnerOptions> = {
  workerID: '',
  pollingIntervals: 1000,
  pollFailureBackoffFactor: 1, //Every failure adds 1x the polling interval
  maxPollInterval: 15000, //15 second max interval
  maxRunner: 1,
}

export interface RunnerArgs {
  client: TaskClient,
  taskType: string,
  watcherOptions: RunnerOptions,
  logger: ConductorLogger
  // TODO(@ntomlin): is callback really the "execute" function and could this just be a `worker`?
  callback: (task: Task) => Promise<TaskResult>
}

export class TaskRunner {
  #startTime: Date | undefined
  isPolling = false
  #tasksTimeout: Record<string, ReturnType<typeof setInterval>> = {}
  #taskType: string
  #tasks: Record<string, Task> = {}
  #client: TaskClient
  #logger: ConductorLogger
  #options: Required<RunnerOptions>
  #pollingFailures: number = 0
  #callback: RunnerArgs["callback"]

  constructor({ client, taskType, watcherOptions, logger, callback} : RunnerArgs) {
    this.#client = client
    this.#taskType = taskType
    this.#logger = logger
    this.#callback = callback
    this.#options = {
      ...DEFAULT_OPTIONS,
      ...watcherOptions
    }
  }

  #destroyTaskAndTaskTimeout = (taskId: string) => {
    clearTimeout(this.#tasksTimeout[taskId])
    delete this.#tasks[taskId]
  }

  #destroyTask = (taskId: string) => {
    delete this.#tasks[taskId]
  }

  #updateTask = async (taskBody: Omit<TaskResult, "workerId">) =>
    this.#client.updateTask({
      ...taskBody,
      workerId: this.#options.workerID,
    })

  // TODO: do we want to start this in a promise so we an return it?
  pollAndRepeat = async () => {
    // TODO: a way to break out?
    while (true) {
      this.#startTime = new Date()
      try {
        if (this.isPolling) {
          const { workerID } = this.#options
          const freeRunnersCount = this.#options.maxRunner - Object.keys(this.#tasks).length
          if (freeRunnersCount > 0) {
            const task = await this.#client.pollTask(this.#taskType, workerID, '')
            if (this.#pollingFailures === undefined || this.#pollingFailures > 0) {
              this.#logger.info('Initial polling started successfully for task type: %s', this.#taskType)
              this.#pollingFailures = 0
            }
            if (task && task.taskId) {
              await this.#executeTask(task)
            } else {
              this.#logger.debug(`No tasks for ${this.#taskType}`)
            }
          }
        }
      } catch (unknownError: unknown) {
        let message = ""
        let stack: string | undefined = ""
        if ((unknownError as Error).stack) { stack = (unknownError as Error).stack}
        if ((unknownError as Error).message) { message = (unknownError as Error).message}
        this.#pollingFailures = (this.#pollingFailures || 0) + 1
        this.#logger.error('Polling connection failed for task type: %s, error: %s, stack: %s', this.#taskType, message, stack)
      }

      let pollInterval = this.#options.pollingIntervals
      if (this.#options.pollFailureBackoffFactor && this.#pollingFailures > 0) {
        pollInterval = pollInterval + (this.#options.pollFailureBackoffFactor * pollInterval * this.#pollingFailures)

        if (this.#options.maxPollInterval && pollInterval > this.#options.maxPollInterval) {
          pollInterval = this.#options.maxPollInterval
        }
      }

      // TODO figure this out
      await sleep(pollInterval - (new Date().getTime() - this.#startTime?.getTime()))
    }
  }

  #executeTask = async (task: Task) => {
    this.#tasks[task.taskId] = task

    // TODO(@ntomlin): the conductor server should handle this for us?
    if (task.responseTimeoutSeconds > 0 && task.responseTimeoutSeconds <= MAX_32_INT) {
      this.#tasksTimeout [task.taskId] = setTimeout(() => {
        this.#destroyTask(task.taskId)
        this.#logger.error('Task %s was not updated in time', task.taskId)
      }, task.responseTimeoutSeconds * 1000)
    }

    // TODO(@ntomlin) I think we need to map the task id to the worker to get this to work
    // right now we have a lot of workers with one callback
    // OR we have watchers separate. This is doing too many things right now
    try {
      const result = await this.#callback(task)
      await this.#updateTask({
        ...result,
        workflowInstanceId: task.workflowInstanceId,
        taskId: task.taskId,
      })
      this.#logger.debug(`Finished polling for task ${task.taskId}`)
    } catch (error: unknown) {
      this.#logger.error(`Error polling and executing ${task.taskId}`, error)
      await this.#updateTask({
        workflowInstanceId: task.workflowInstanceId,
        taskId: task.taskId,
        reasonForIncompletion: (error as Record<string, string>)?.message ?? DEFAULT_ERROR_MESSAGE,
        status: TaskResultStatus.FAILED,
        outputData: {}
      })
    } finally {
      this.#destroyTaskAndTaskTimeout(task.taskId)
    }
  }

  startPolling = () => {
    if (this.isPolling) {
      throw new Error('Watcher is already started')
    }

    this.isPolling = true
    this.#startTime = new Date()
    // TODO(@ntomlin) is this what we want?
    return this.pollAndRepeat()
  }

  stopPolling = () => {
    this.isPolling = false
  }
}
