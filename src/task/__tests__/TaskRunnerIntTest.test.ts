import { expect, describe, test, jest } from "@jest/globals";
import {
  OrkesApiConfig,
  orkesConductorClient,
  WorkflowExecutor,
  TaskRunner,
  simpleTask,
} from "../../../";

const config: Partial<OrkesApiConfig> = {
  keyId: `${process.env.KEY_ID}`,
  keySecret: `${process.env.KEY_SECRET}`,
  serverUrl: "https://pg-staging.orkesconductor.com/api",
};

describe("TaskManager", () => {
  const clientPromise = orkesConductorClient(config);

  jest.setTimeout(10000);
  test("worker example ", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const taskRunner = new TaskRunner({
      taskResource: client.taskResource,
      worker: {
        taskDefName: "task-manager-int-test",
        execute: async () => {
          return {
            outputData: {
              hello: "From your worker",
            },
            status: "COMPLETED",
          };
        },
      },
      options: {
        pollInterval: 1000,
        domain: undefined,
        concurrency: 2,
        workerID: "",
      },
    });
    taskRunner.startPolling();

    expect(taskRunner.isPolling).toEqual(true);
    const workflowName = "task-manager-int-test-wf";
    await executor.registerWorkflow(true, {
      name: workflowName,
      version: 1,
      ownerEmail: "developers@orkes.io",
      tasks: [simpleTask("task-manager-int-test", "task-manager-int-test", {})],
      inputParameters: [],
      outputParameters: {},
      timeoutSeconds: 0,
    });

    const executionId = await executor.startWorkflow({
      name:workflowName,
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 900));
    taskRunner.updateOptions({ concurrency: 1, pollInterval: 100 });
    const workflowStatus = await executor.getWorkflow(executionId, true);

    const [firstTask] = workflowStatus.tasks || [];
    expect(firstTask?.taskType).toEqual("task-manager-int-test");
    expect(workflowStatus.status).toEqual("COMPLETED");

    taskRunner.stopPolling();

    expect(taskRunner.isPolling).toEqual(false);
    const taskDetails = await executor.getTask(firstTask?.taskId || "");
    expect(taskDetails.status).toEqual("COMPLETED");
  });
});
