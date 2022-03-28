const ConductorClient = require('./client').default

const conductorClient = new ConductorClient({
    baseURL: 'http://localhost:8080/api',
})

//Replace with prefered logger and/or leave null
const logger = {
    info: (msg, ...args) => { console.log(msg, ...args) },
    error: (msg, ...args) => { console.error(msg, ...args) },
}

const myTaskHandler = async (data, updater) => {
    const newOutput = {
        ...data.outputData,
        executed: (data.outputData.executed || 0) + 1,
    }

    if (newOutput.executed < 10) {                
        await updater.inprogress({
            outputData: newOutput,
            callbackAfterSeconds: 2,
            logs: ['Task is still in progress.'],
        })
    } else {
        await updater.complete({
            outputData: newOutput,
            logs: ['Task is still in complete.'],
        })
    }
}

conductorClient.registerWatcher('my_task', myTaskHandler, { pollingIntervals: 1000, maxRunner: 1 }, true, logger)