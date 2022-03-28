const request = require('superagent')

let TaskStatus = {
    ['IN_PROGRESS']: 'IN_PROGRESS',
    ['FAILED']: 'FAILED',
    ['FAILED_WITH_TERMINAL_ERROR']: 'FAILED_WITH_TERMINAL_ERROR',
    ['COMPLETED']: 'COMPLETED',
}

exports.TaskStatus = TaskStatus

exports.getWorkflowDefinition = (baseURL, workflowName, version = 1) => 
    request
        .get(`${baseURL}/metadata/workflow/${workflowName}`)
        .query({version})

exports.createWorkflowDef = (baseURL, workflowDefBody) => 
    request
        .post(`${baseURL}/metadata/workflow`)
        .set('Content-Type', 'application/json')
        .send(workflowDefBody)

exports.updateWorkflowDefs = (baseURL, workflowDefsBody) =>
    request
        .put(`${baseURL}/metadata/workflow`)
        .set('Content-Type', 'application/json')
        .send(workflowDefsBody)

exports.getAllWorkflowDefs = (baseURL) =>
    request
        .get(`${baseURL}/metadata/workflow/`)

exports.unRegisterWorkflowDef = (baseURL, workflowDefName, version = 1) =>
    request
        .delete(`${baseURL}/metadata/workflow/${workflowDefName}/${version}`)
        .query({version})

exports.getTaskDef = (baseURL, taskDefName) =>
    request
        .get(`${baseURL}/metadata/taskdefs/${taskDefName}`)

exports.registerTaskDefs = (baseURL, taskDefsMeta) => 
    request
        .post(`${baseURL}/metadata/taskdefs`)
        .set('Content-Type', 'application/json')
        .send(taskDefsMeta)

exports.updateTaskDef = (baseURL, taskDefMeta) =>
    request
        .put(`${baseURL}/metadata/taskdefs`)
        .set('Content-Type', 'application/json')
        .send(taskDefMeta)

exports.unRegisterTaskDef = (baseURL, taskDefName) =>
    request
        .delete(`${baseURL}/metadata/taskdefs/${taskDefName}`)

exports.getAllTaskDefs = (baseURL) =>
    request
        .get(`${baseURL}/metadata/taskdefs`)

exports.getTask = (baseURL, taskID) =>
    request
        .get(`${baseURL}/tasks/${taskID}`)

exports.updateTask = (baseURL, taskBody) =>
    request
        .post(`${baseURL}/tasks`)
        .set('Content-Type', 'application/json')
        .send(taskBody)
        
exports.logForTask = (baseURL, taskID, log) =>
    request
        .post(`${baseURL}/tasks/${taskID}/log`)
        .set('Content-Type', 'application/json')
        .send(log)

exports.pollForTask = (baseURL, taskType, workerID) =>
    request
        .get(`${baseURL}/tasks/poll/${taskType}`)
        .query({ workerid: workerID })

exports.pollForTasks = (baseURL, taskType, workerID, count = 1) =>
    request
        .get(`${baseURL}/tasks/poll/batch/${taskType}`)
        .query({ workerid: workerID, count })

exports.getAllTasksInQueue = (baseURL) =>
    request
        .get(`${baseURL}/tasks/queue/all`)

exports.removeTaskFromQueue = (baseURL, taskType, taskID) =>
    request
        .delete(`${baseURL}/tasks/queue/${taskType}/${taskID}`)

exports.getTaskQueueSizes = (baseURL, taskNames) =>
    request
        .post(`${baseURL}/tasks/queue/sizes`)
        .set('Content-Type', 'application/json')
        .send(taskNames)

exports.getWorkflow = (baseURL, workflowId, includeTasks = true) =>
    request
        .get(`${baseURL}/workflow/${workflowId}`)
        .query({ includeTasks: includeTasks ? 'true' : 'false' })

exports.getRunningWorkflows = (baseURL, workflowName, version = 1) =>
    request
        .get(`${baseURL}/workflow/running/${workflowName}`)
        .query({ version })

exports.searchWorkflows = (baseURL, start = 0, size = 20, sort = 'ASC:createTime', freeText, query) =>
    request
        .get(`${baseURL}/workflow/search`)
        .query({
            start,
            size,
            sort,
            freeText,
            query,
        })

exports.startDynamicWorkflow = (baseURL, inputJson = {}) =>
    request
        .post(`${baseURL}/workflow`)
        .set('Content-Type', 'application/json')
        .send(inputJson)

exports.startWorkflow = (baseURL, workflowName, version = 1, correlationId, inputJson = {}) =>
    request
        .post(`${baseURL}/workflow/${workflowName}`)
        .set('Content-Type', 'application/json')
        .query({
            version,
            correlationId,
        })
        .send(inputJson)

exports.terminateWorkflow = (baseURL, workflowId, reason) =>
    request
        .delete(`${baseURL}/workflow/${workflowId}`)
        .query({
            reason,
        })

exports.deleteWorkflowFromSystem = (baseURL, workflowId, reason) =>
    request
        .delete(`${baseURL}/workflow/${workflowId}/remove`)
        .query({
            reason,
        })

exports.pauseWorkflow = (baseURL, workflowId) =>
    request
        .put(`${baseURL}/workflow/${workflowId}/pause`)
        .set('Content-Type', 'application/json')

exports.resumeWorkflow = (baseURL, workflowId) =>
    request
        .put(`${baseURL}/workflow/${workflowId}/resume`)
        .set('Content-Type', 'application/json')

exports.skipTaskFromWorkflow = (baseURL, workflowId, taskReferenceName, taskInput = {}, taskOutput = {}) =>
    request
        .put(`${baseURL}/workflow/${workflowId}/skiptask/${taskReferenceName}`)
        .set('Content-Type', 'application/json')
        .send({ taskInput, taskOutput })

exports.rerunWorkflow = (baseURL, workflowId, rerunWorkflowRequest) =>
    request
        .post(`${baseURL}/workflow/${workflowId}/rerun`)
        .set('Content-Type', 'application/json')
        .send(rerunWorkflowRequest)

exports.retryWorkflow = (baseURL, workflowId) =>
    request
        .post(`${baseURL}/workflow/${workflowId}/retry`)
        .set('Content-Type', 'application/json')

exports.restartWorkflow = (baseURL, workflowId) =>
    request
        .post(`${baseURL}/workflow/${workflowId}/restart`)
        .set('Content-Type', 'application/json')