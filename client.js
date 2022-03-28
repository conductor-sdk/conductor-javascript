const os = require('os')
const Watcher = require('./watcher').default
const connector = require('./connector')
exports.DEFAULT_OPTIONS = {
    baseURL: 'http://localhost:8080/api',
    workerID: os.hostname() + (process.env.NODE_APP_INSTANCE || ''),
}

class ConductorClient {
    constructor(options) {
        this.tasks = {}
        this.getWorkflowDefinition = (workflowName, version = 1) => connector.getWorkflowDefinition(this.options.baseURL, workflowName, version)
        this.getAllWorkflowDefs = () => connector.getAllWorkflowDefs(this.options.baseURL)
        this.createWorkflowDef = (workflowDefBody) => connector.createWorkflowDef(this.options.baseURL, workflowDefBody)
        this.updateWorkflowDefs = (workflowDefsBody) => connector.updateWorkflowDefs(this.options.baseURL, workflowDefsBody)
        this.unRegisterWorkflowDef = (workflowDefName, version = 1) => connector.unRegisterWorkflowDef(this.options.baseURL, workflowDefName, version)
        this.getTaskDef = (taskDefName) => connector.getTaskDef(this.options.baseURL, taskDefName)
        this.getAllTaskDefs = () => connector.getAllTaskDefs(this.options.baseURL)
        this.registerTaskDefs = (taskDefsMeta) => connector.registerTaskDefs(this.options.baseURL, taskDefsMeta)
        this.updateTaskDef = (taskDefMeta) => connector.updateTaskDef(this.options.baseURL, taskDefMeta)
        this.unRegisterTaskDef = (taskDefName) => connector.unRegisterTaskDef(this.options.baseURL, taskDefName)
        this.updateTask = (taskBody) => connector.updateTask(this.options.baseURL, taskBody)
        this.getTask = (taskID) => connector.getTask(this.options.baseURL, taskID)
        this.logForTask = (taskID, log) => connector.logForTask(this.options.baseURL, taskID, log)
        this.getWorkflow = (workflowId, includeTasks = true) => connector.getWorkflow(this.options.baseURL, workflowId, includeTasks)
        this.searchWorkflows = (start = 0, size = 20, sort = 'ASC:createTime', freeText, query) => connector.searchWorkflows(this.options.baseURL, start, size, sort, freeText, query)
        this.getRunningWorkflows = (workflowName, version = 1) => connector.getRunningWorkflows(this.options.baseURL, workflowName, version)
        this.startDynamicWorkflow = (inputJson) => connector.startDynamicWorkflow(this.options.baseURL, inputJson)
        this.startWorkflow = (workflowName, input, version = 1, correlationId) => connector.startWorkflow(this.options.baseURL, workflowName, version, correlationId, input)
        this.restartWorkflow = (workflowId) => connector.restartWorkflow(this.options.baseURL, workflowId)
        this.terminateWorkflow = (workflowId, reason = '') => connector.terminateWorkflow(this.options.baseURL, workflowId, reason)
        this.deleteWorkflowFromSystem = (workflowId, reason) => connector.deleteWorkflowFromSystem(this.options.baseURL, workflowId, reason)
        this.pauseWorkflow = (workflowId) => connector.pauseWorkflow(this.options.baseURL, workflowId)
        this.resumeWorkflow = (workflowId) => connector.resumeWorkflow(this.options.baseURL, workflowId)
        this.retryWorkflow = (workflowId) => connector.retryWorkflow(this.options.baseURL, workflowId)
        this.skipTaskFromWorkflow = (workflowId, taskReferenceName, taskInput, taskOutput) => connector.skipTaskFromWorkflow(this.options.baseURL, workflowId, taskReferenceName, taskInput, taskOutput)
        this.rerunWorkflow = (workflowId, reRunFromWorkflowId, workflowInput = {}, reRunFromTaskId, taskInput = {}) => connector.rerunWorkflow(this.options.baseURL, workflowId, {
            reRunFromWorkflowId,
            workflowInput,
            reRunFromTaskId,
            taskInput,
        })
        this.registerWatcher = (taskType, callback = f => f, options, startPolling = false, logger) => {
            if (!taskType) {
                throw new Error('Task type is required for registering watcher')
            }
            
            if (this.tasks[taskType]) {
                throw new Error(`Task "${taskType}" is already registered`)
            }

            this.tasks[taskType] = new Watcher(taskType, Object.assign({}, this.options, options), callback, logger)

            if (startPolling) {
                this.tasks[taskType].startPolling()
            }
            
            return this.tasks[taskType]
        }
        this.startPolling = () => {
            for (const taskType in this.tasks) {
                if (this.tasks[taskType].isPolling === false) {
                    this.tasks[taskType].startPolling()
                }
            }
        }
        this.stopPolling = () => {
            for (const taskType in this.tasks) {
                if (this.tasks[taskType].isPolling === true) {
                    this.tasks[taskType].stopPolling()
                }
            }
        }
        this.options = Object.assign({}, exports.DEFAULT_OPTIONS, options)
    }
}
exports.default = ConductorClient