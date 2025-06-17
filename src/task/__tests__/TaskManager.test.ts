import { expect, describe, test, jest } from "@jest/globals";
import { simpleTask, WorkflowExecutor } from "../../core";
import { orkesConductorClient } from "../../orkes";
import { TaskManager, ConductorWorker } from "../index";
import { mockLogger } from "./mockLogger";
import {TestUtil} from "../../core/__test__/utils/test-util";


const BASE_TIME = 500;
describe("TaskManager", () => {
  const clientPromise = orkesConductorClient({ useEnvVars: true, refreshTokenInterval: 0 });

  jest.setTimeout(15000);
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
      options: { pollInterval: BASE_TIME },
    });
    manager.startPolling();

    const executionId = await executor.startWorkflow({
      name: "TaskManagerTest",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 3));
    const workflowStatus = await client.workflowResource.getExecutionStatus(
      executionId,
      true
    );
    await manager.stopPolling();
    expect(workflowStatus.status).toEqual("COMPLETED");
  });

  test("On error it should call the errorHandler provided", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const worker: ConductorWorker = {
      taskDefName: "taskmanager-error-test2",
      execute: async () => {
        throw Error("This is a forced error");
      },
    };

    const errorHandler = jest.fn();

    const manager = new TaskManager(client, [worker], {
      onError: errorHandler,
      options: { pollInterval: BASE_TIME },
    });

    manager.startPolling();

    await executor.startWorkflow({
      name: "TaskManagerTestE2",
      input: {},
      version: 1,
    });
    await new Promise((r) => setTimeout(() => r(true), BASE_TIME * 4));
    expect(errorHandler).toBeCalledTimes(1);
    await manager.stopPolling();
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
      options: { pollInterval: BASE_TIME },
    });

    manager.startPolling();

    const status = await executor.executeWorkflow(
      {
        name: "TaskManagerTestE",
        input: {},
        version: 1,
      },
      "TaskManagerTestE",
      1,
      "noErrorHandlerProvidedIdentifier"
    );
    await manager.stopPolling();
    expect(status.status).toEqual("FAILED");
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
      options: { pollInterval: BASE_TIME, concurrency: 2 },
      // logger: console,
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
    manager.updatePollingOptions({ pollInterval: BASE_TIME, concurrency: 1 });

    const workflowStatus = await TestUtil.waitForWorkflowCompletion(executor, executionId!, 30000);

    expect(workflowStatus.status).toEqual("COMPLETED");
    await manager.stopPolling();

    expect(manager.isPolling).toBeFalsy();
    expect(manager.options.concurrency).toBe(1);
    expect(manager.options.pollInterval).toBe(BASE_TIME);
  });

  test("Should not be able to startPolling if TaskManager has no workers", async () => {
    const client = await clientPromise;
    const manager = new TaskManager(client, [], {
      options: { pollInterval: BASE_TIME, concurrency: 2 },
    });
    expect(() => manager.startPolling()).toThrowError(
      "No workers supplied to TaskManager"
    );
  });

  test("Should not be able to startPolling if duplicate workers", async () => {
    const client = await clientPromise;

    const workerNames: string[] = Array.from({ length: 3 })
      .fill(0)
      .map(() => `worker-name`);

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

    const manager = new TaskManager(client, workers, {
      options: { pollInterval: BASE_TIME, concurrency: 2 },
    });
    expect(() => manager.startPolling()).toThrowError(
      "Duplicate worker taskDefName: worker-name"
    );
  });

  test("Updates single worker properties", async () => {
    const client = await clientPromise;

    const executor = new WorkflowExecutor(client);
    // just create a bunch of worker names
    const workerNames: string[] = Array.from({ length: 3 })
      .fill(0)
      .map((_, i: number) => `taskman-single-worker-update${1 + i}`);

    const candidateWorkerUpdate = "taskman-single-worker-update1";
    const initialCandidateWorkflowOptions = {
      concurrency: 1,
      pollInterval: BASE_TIME * 3,
    };

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
      ...(name === candidateWorkerUpdate
        ? initialCandidateWorkflowOptions
        : {}),
    }));

    //create the manager with initial configuations
    const manager = new TaskManager(client, workers, {
      options: { pollInterval: BASE_TIME, concurrency: 2 },
      logger: mockLogger,
    });
    // start polling
    manager.startPolling();

    expect(manager.isPolling).toBeTruthy();

    const workflowName = "TaskManagerTestMultiSingleWorkerUpdate";

    const updatedWorkerOptions = {
      concurrency: 3,
      pollInterval: BASE_TIME,
    };

    // change the polling options for a single worker
    manager.updatePollingOptionForWorker(
      candidateWorkerUpdate,
      updatedWorkerOptions
    );

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
    manager.updatePollingOptions({ pollInterval: BASE_TIME, concurrency: 1 });

    const workflowStatus = await executor.getWorkflow(executionId!, true);

    expect(workflowStatus.status).toEqual("COMPLETED");
    await manager.stopPolling();

    expect(manager.isPolling).toBeFalsy();
    expect(manager.options.concurrency).toBe(1);
    expect(manager.options.pollInterval).toBe(BASE_TIME);
    expect(mockLogger.info).toBeCalledWith(
      `TaskWorker ${candidateWorkerUpdate} initialized with concurrency of ${initialCandidateWorkflowOptions.concurrency} and poll interval of ${initialCandidateWorkflowOptions.pollInterval}`
    );
    

    expect(mockLogger.info).toBeCalledWith(
      `TaskWorker ${candidateWorkerUpdate} configuration updated with concurrency of ${updatedWorkerOptions.concurrency} and poll interval of ${updatedWorkerOptions.pollInterval}`
    );
  });
});
