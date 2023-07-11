import { expect, describe, test, jest } from "@jest/globals";
import {
  simpleTask,
  WorkflowExecutor,
} from "../../core";
import {
  OrkesApiConfig,
  orkesConductorClient,
} from "../../orkes";
import {
  TaskManager,
  ConductorWorker,
} from "../index";

const playConfig: Partial<OrkesApiConfig> = {
  keyId: `${process.env.KEY_ID}`,
  keySecret: `${process.env.KEY_SECRET}`,
  serverUrl: `${process.env.SERVER_URL}`,
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

    const manager = new TaskManager(client, [worker], {
      options: { pollInterval: 1500 },
    });
    manager.startPolling();

    const executionId = await executor.startWorkflow({
      name: "TaskManagerTest",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 3500));
    const workflowStatus = await client.workflowResource.getExecutionStatus(
      executionId,
      true
    );
    manager.stopPolling();
    expect(workflowStatus.status).toEqual("COMPLETED");
  });

  test("On error it should call the errorHandler provided", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const worker: ConductorWorker = {
      taskDefName: "taskmanager-error-test",
      execute: async () => {
        throw Error("This is a forced error");
      },
    };

    const errorHandler = jest.fn();

    const manager = new TaskManager(client, [worker], {
      onError: errorHandler,
      options: { pollInterval: 1500 },
    });

    manager.startPolling();

    await executor.startWorkflow({
      name: "TaskManagerTestE",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), 4500));
    expect(errorHandler).toBeCalledTimes(1);
    manager.stopPolling();
  });

  test("If no error handler provided. it should just update the task", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const worker: ConductorWorker = {
      taskDefName: "taskmanager-error-test",
      execute: async () => {
        throw Error("This is a forced error");
      },
    };

    const manager = new TaskManager(client, [worker], {
      options: { pollInterval: 1500 },
    });

    manager.startPolling();

    await executor.startWorkflow({
      name: "TaskManagerTest",
      input: {},
      version: 1,
    });
    manager.stopPolling();
  });

  test("multi worker example", async () => {
    const client = await clientPromise;

    const executor = new WorkflowExecutor(client);
    // just create a bunch of worker names
    const workerNames: string[] = Array.from({ length: 3 })
      .fill(0)
      .map((_, i: number) => `taskman-multi-${1 + i}`);

    // names to actual workers
    const workers: ConductorWorker[] = workerNames.map((name) => ({
      taskDefName: name,
      execute: async () => {
        return {
          outputData: {
            hello: "From your worker",
          },
          status: "COMPLETED",
        };
      },
    }));

    //create the manager with initial configuations
    const manager = new TaskManager(client, workers, {
      options: { pollInterval: 1500, concurrency: 2 },
      logger: console,
    });
    // start polling
    manager.startPolling();

    expect(manager.isPolling).toBeTruthy();

    const workflowName = "TaskManagerTestMulti";

    // increase polling speed
    manager.updatePollingOptions({ concurrency: 4 });

    // create the workflow where we will run the test
    await executor.registerWorkflow(true, {
      name: workflowName,
      version: 1,
      ownerEmail: "developers@orkes.io",
      tasks: workerNames.map((name) => simpleTask(name, name, {})),
      inputParameters: [],
      outputParameters: {},
      timeoutSeconds: 0,
    });

    //Start workf
    const { workflowId: executionId } = await executor.executeWorkflow(
      {
        name: workflowName,
        version: 1,
      },
      workflowName,
      1,
      "identifierTaskManMulti"
    );
    expect(executionId).toBeDefined();

    // decrease speed again
    manager.updatePollingOptions({ pollInterval: 1000, concurrency: 1 });

    const workflowStatus = await executor.getWorkflow(executionId!, true);

    expect(workflowStatus.status).toEqual("COMPLETED");
    manager.stopPolling();
    await new Promise((r) => setTimeout(() => r(true), 1000));

    expect(manager.isPolling).toBeFalsy();
    expect(manager.options.concurrency).toBe(1);
    expect(manager.options.pollInterval).toBe(1000);
  });
});
