import {jest, test, expect} from "@jest/globals"
import {setTimeout} from "timers/promises"
import type {Mocked} from "jest-mock"

import {RunnerArgs, TaskRunner} from "../TaskRunner"
import {TaskClient} from "../TaskClient"
import {TaskResultStatus, TaskRunnerResult} from "../types"
import {mockLogger} from "./mockLogger"

const taskClientStub: Mocked<Pick<TaskClient, "pollTask" | "updateTask">> = {
  pollTask: jest.fn(),
  updateTask: jest.fn()
}
const mockTaskClient = taskClientStub as unknown as TaskClient

test('polls tasks', async () => {
  const workerID = "worker-id"
  const args: RunnerArgs = {
    worker: {
      taskDefName: "test",
      execute: async ({inputData}) =>  {
        return {
          outputData: {
            "hello": "from worker",
            ...inputData
          },
          status: TaskResultStatus.COMPLETED
        }
      },
    },
    options: {
      pollInterval: 10,
      workerID
    },
    logger: mockLogger,
    client: mockTaskClient
  }
  const workflowInstanceId =  "fake-workflow-id"
  const taskId = "fake-task-id"
  taskClientStub.pollTask.mockResolvedValue({
    taskId,
    workflowInstanceId,
    status: "IN_PROGRESS",
    reasonForIncompletion: undefined,
    inputData: {
      "input": "from workflow"
    }
  })

  const runner = new TaskRunner(args)
  runner.startPolling()
  await setTimeout(10)
  runner.stopPolling()
  const expected: TaskRunnerResult = {
    taskId,
    workflowInstanceId,
    status: "COMPLETED",
    outputData: {
      "hello": "from worker",
      "input": "from workflow"
    }
  }
  expect(taskClientStub.updateTask).toHaveBeenCalledWith(expected)
})
