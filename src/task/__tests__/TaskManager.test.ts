import { expect, describe, test, jest } from "@jest/globals";
import { OrkesApiConfig, orkesConductorClient } from "../../common";
import { WorkflowExecutor } from "../../core";
import { TaskManager } from "../TaskManager";
import { ConductorWorker } from "../Worker";

const playConfig: Partial<OrkesApiConfig> = {
  keyId: `${process.env.KEY_ID}`,
  keySecret: `${process.env.KEY_SECRET}`,
  serverUrl: "https://pg-staging.orkesconductor.com/api",
};

describe("TaskManager", () => {
  const clientPromise = orkesConductorClient(playConfig);

  jest.setTimeout(10000);
  test("Should run workflow with worker", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const worker: ConductorWorker = {
      taskDefName: "taskmanager-test",
      execute: async () => {
        return {
          outputData: {
            hello: "From your worker",
          },
          status: "COMPLETED",
        };
      },
    };

    const manager = new TaskManager(client, [worker]);
    manager.startPolling();

    const executionId = await executor.startWorkflow({
      name: "TaskManagerTest",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 2500));
    const workflowStatus = await client.workflowResource.getExecutionStatus(
      executionId,
      true
    );
    expect(workflowStatus.status).toEqual("COMPLETED");
    manager.stopPolling();
  });

  test("On error should set task as FAILED", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const worker: ConductorWorker = {
      taskDefName: "taskmanager-test",
      execute: async () => {
        throw Error("This is a forced error");
      },
    };

    const errorHandler = jest.fn();

    const manager = new TaskManager(client, [worker], {
      onError: errorHandler,
    });

    manager.startPolling();

    await executor.startWorkflow({
      name: "TaskManagerTest",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 3500));
    expect(errorHandler).toBeCalledTimes(1);
    manager.stopPolling();
  });
});
