import {TaskClient} from "./TaskClient"
import {ConductorLogger} from "../common/ConductorLogger"
import {Task, TaskResultStatus} from "./types"
import {sleep} from "./sleep"
import {ConductorWorker} from "./Worker"

const DEFAULT_ERROR_MESSAGE = "An unknown error occurred"

interface RunnerOptions {
  workerID: string
  pollingIntervals?: number,
  pollFailureBackoffFactor?: number,
  maxPollInterval?: number,
  maxRunner?: number,
  retryCount?: number
}

const DEFAULT_OPTIONS: Required<RunnerOptions> = {
  workerID: '',
  pollingIntervals: 1000,
  pollFailureBackoffFactor: 1, //Every failure adds 1x the polling interval
  maxPollInterval: 15000, //15 second max interval
  maxRunner: 1,
  retryCount: 3
}

export interface RunnerArgs {
  client: TaskClient,
  taskType: string,
  runnerOptions: RunnerOptions,
  logger: ConductorLogger
  worker: ConductorWorker
}

export class TaskRunner {
  isPolling = false
  #client: TaskClient
  #logger: ConductorLogger
  #options: Required<RunnerOptions>
  #failures: number = 0
  worker: RunnerArgs["worker"]

  constructor({ client, runnerOptions, logger, worker} : RunnerArgs) {
    this.#client = client
    this.#logger = logger
    this.worker = worker
    this.#options = {
      ...DEFAULT_OPTIONS,
      ...runnerOptions
    }
  }

  pollAndRepeat = async () => {
    while (this.isPolling) {
      try {
        const { workerID } = this.#options
        // TODO (@ntomlin): this is our way of limiting parallelism because we are in a non threaded context
        // I _think_ we should just do this outside in the manager though, and then allow these individual runners to blindly poll when allowed?
        const task = await this.#client.pollTask(this.worker.taskDefName, workerID, '')
        if (task && task.taskId) {
          await this.#executeTask(task)
        } else {
          this.#logger.debug(`No tasks for ${this.worker.taskDefName}`)
        }
      } catch (unknownError: unknown) {
        this.#failures = this.#failures + 1
        this.#handleError(unknownError)
      }

      if (this.#failures >= this.#options.retryCount) {
        this.stopPolling()
        break;
      }

      let pollInterval = this.#options.pollingIntervals
      if (this.#options.pollFailureBackoffFactor && this.#failures > 0) {
        pollInterval = pollInterval + (this.#options.pollFailureBackoffFactor * pollInterval * this.#failures)
        if (this.#options.maxPollInterval && pollInterval > this.#options.maxPollInterval) {
          pollInterval = this.#options.maxPollInterval
        }
      }

      // TODO(@ntomlin): stop polling after we've failed `n` times?

      // @ntomlin:
      // this originally calculated the pollInterval from the starTime of the current poll
      // to allow the individual runners to "catch up" if the execution of a task was taking longer than normal
      // I've removed this and simplified to match the other client lib's behavior but please let me know if that's unwanted
      await sleep(pollInterval)
    }
  }

  #handleError = (unknownError: unknown) => {
    let message = ""
    let stack: string | undefined = ""
    if ((unknownError as Error).stack) { stack = (unknownError as Error).stack}
    if ((unknownError as Error).message) { message = (unknownError as Error).message}
    this.#failures = (this.#failures || 0) + 1
    this.#logger.error('Polling connection failed for task type: %s, error: %s, stack: %s', this.worker.taskDefName, message, stack)
  }

  #executeTask = async (task: Task) => {
    // TODO(@ntomlin): I think conductor server handles this for us so we can omit this
    // if (task.responseTimeoutSeconds > 0 && task.responseTimeoutSeconds <= MAX_32_INT) {
    //   this.#tasksTimeout [task.taskId] = setTimeout(() => {
    //     this.#destroyTask(task.taskId)
    //     this.#logger.error('Task %s was not updated in time', task.taskId)
    //   }, task.responseTimeoutSeconds * 1000)
    // }

    // TODO(@ntomlin) I think we need to map the task id to the worker to get this to work
    // right now we have a lot of workers with one callback
    // OR we have watchers separate. This is doing too many things right now
    try {
      const result = await this.worker.execute(task)
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

  startPolling = () => {
    if (this.isPolling) {
      throw new Error('Runner is already started')
    }

    this.isPolling = true
    // TODO(@ntomlin) is this what we want?
    return this.pollAndRepeat()
  }

  stopPolling = () => {
    this.isPolling = false
  }
}
