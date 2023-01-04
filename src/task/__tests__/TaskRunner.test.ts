import {jest, test, expect} from "@jest/globals"
import type {Mocked} from "jest-mock"

import {RunnerArgs, TaskRunner} from "../TaskRunner"
import {mockLogger} from "./mockLogger"
import {TaskResourceService} from "../../common/open-api"

const taskClientStub: Mocked<Pick<TaskResourceService, "poll" | "updateTask1">> = {
  poll: jest.fn(),
  updateTask1: jest.fn()
}
const mockTaskClient = taskClientStub as unknown as TaskResourceService

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
          status: "COMPLETED"
        }
      },
    },
    options: {
      pollInterval: 10,
      domain: '',
      concurrency: 1,
      workerID
    },
    logger: mockLogger,
    taskResource: mockTaskClient
  }
  const workflowInstanceId =  "fake-workflow-id"
  const taskId = "fake-task-id"
  taskClientStub.poll.mockResolvedValue({
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
  await new Promise((r) => setTimeout(() => r(true), 10));
  runner.stopPolling()
  const expected = {
    taskId,
    workflowInstanceId,
    status: "COMPLETED",
    outputData: {
      "hello": "from worker",
      "input": "from workflow"
    }
  }
  expect(taskClientStub.updateTask1).toHaveBeenCalledWith(expected)
})
