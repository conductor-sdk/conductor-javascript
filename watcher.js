const os = require('os')
const connector = require('./connector')
const MAX_32_INT = 2147483647
const ONE_YEAR_IN_SECONDS = 31536000
const DEFAULT_OPTIONS = {
    pollingIntervals: 1000,
    baseURL: 'http://localhost:8080/api',
    pollFailureBackoffFactor: 1, //Every failure adds 1x the polling interval
    maxPollInterval: 15000, //15 second max interval
    maxRunner: 1,
    workerID: os.hostname() + (process.env.NODE_APP_INSTANCE || ''),
}

function sleep (time) {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
              resolve()
              clearTimeout(timeout)
          }, time)
    })
}

class Watcher {
    constructor(taskType, options, callback, logger) {
        this.isPolling = false
        this.tasks = {}
        this.tasksTimeout = {}
        this.destroyTaskAndTaskTimeout = (taskId) => {
            clearTimeout(this.tasksTimeout[taskId])
            delete this.tasks[taskId]
        }
        this.destroyTask = (taskId) => delete this.tasks[taskId]
        this.ackTask = (taskId) => connector.ackTask(this.options.baseURL, taskId, this.options.workerID)
        this.log = (taskId, log) => connector.logForTask(this.options.baseURL, taskId, log)
        this.updateResult = (taskBody) => connector.updateTask(this.options.baseURL, { ...taskBody, workerId: this.options.workerID })

        this.getUpdater = (task) => {
            const callbackUpdater = (taskUpdateData, status, reasonForIncompletion = '') => {
                try {
                    return this.updateResult(
                        { 
                            workflowInstanceId: task.workflowInstanceId, 
                            taskId: task.taskId, 
                            reasonForIncompletion,
                            status,
                            ...taskUpdateData,
                        })
                } catch (e) {
                    logger.error(e, 'Failed to update task for task type: %s', this.taskType)
                }
            }
            callbackUpdater.complete = (_a) => callbackUpdater(_a, connector.TaskStatus.COMPLETED)
            callbackUpdater.fail = (_a) => callbackUpdater(_a, connector.TaskStatus.FAILED)
            callbackUpdater.failWithTerminalError = (_a) => callbackUpdater(_a, connector.TaskStatus.FAILED_WITH_TERMINAL_ERROR)
            callbackUpdater.inprogress = (_a) => callbackUpdater({callbackAfterSeconds: ONE_YEAR_IN_SECONDS, ..._a}, connector.TaskStatus.IN_PROGRESS)
            
            callbackUpdater.log = (log) => this.log(task.taskId, log)
            return callbackUpdater
        }
        
        this.pollAndRepeat = async () => {
            while (true) {
                this.startTime = new Date()
                try {
                    if (this.isPolling) {
                        const { baseURL, workerID } = this.options
                        const freeRunnersCount = this.options.maxRunner - Object.keys(this.tasks).length
                        if (freeRunnersCount > 0) {
                            let resp = await connector.pollForTasks(baseURL, this.taskType, workerID, freeRunnersCount)
                            if (this.pollingFailures === undefined || this.pollingFailures > 0) {
                                logger.info('Initial polling started successfully for task type: %s', this.taskType)
                                this.pollingFailures = 0
                            }

                            const tasks = resp.body || []
                            await Promise.all(tasks.map(this.doCallbackForTask))
                        }
                    }
                } catch (error) {
                    this.pollingFailures = (this.pollingFailures || 0) + 1
                    logger.error('Polling connection failed for task type: %s, error: %s, stack: %s', this.taskType, error.message, error.stack)
                }

                let pollInterval = this.options.pollingIntervals
                if (this.options.pollFailureBackoffFactor && this.pollingFailures > 0) {
                    pollInterval = pollInterval + (this.options.pollFailureBackoffFactor * pollInterval * this.pollingFailures)
                    
                    if (this.options.maxPollInterval && pollInterval > this.options.maxPollInterval) {
                        pollInterval = this.options.maxPollInterval
                    }
                }

                await sleep(pollInterval - (new Date().getTime() - this.startTime.getTime()))
            }
        }

        this.doCallbackForTask = async (task) => {
            this.tasks[task.taskId] = task

            if (task.responseTimeoutSeconds > 0 && task.responseTimeoutSeconds <= MAX_32_INT) {
                this.tasksTimeout[task.taskId] = setTimeout(() => {
                    this.destroyTask(task.taskId)
                    logger.error('Task %s was not updated in time', task.taskId)
                }, task.responseTimeoutSeconds * 1000)
            }
            
            try {
                const callbackUpdater = this.getUpdater(task)
                const cb = this.callback(task, callbackUpdater)
                if (typeof cb.then === 'function' && typeof cb.catch === 'function') {
                    await cb
                }
            } catch (error) {
                this.updateResult({
                    workflowInstanceId: task.workflowInstanceId,
                    taskId: task.taskId,
                    reasonForIncompletion: error.message,
                    status: connector.TaskStatus.FAILED,
                })
            } finally {
                this.destroyTaskAndTaskTimeout(task.taskId)
            }
        }
        
        this.startPolling = () => {
            if (this.isPolling) {
                throw new Error('Watcher is already started')
            }

            this.isPolling = true
            this.startTime = new Date()
        }

        this.stopPolling = () => {
            this.isPolling = false
        }
        
        if (!callback) {
            throw new Error('Callback function is required')
        }
        
        this.taskType = taskType
        this.options = Object.assign({}, DEFAULT_OPTIONS, options)
        this.callback = callback
        this.logger = logger
        this.poller = this.pollAndRepeat()
    }
}
exports.default = Watcher