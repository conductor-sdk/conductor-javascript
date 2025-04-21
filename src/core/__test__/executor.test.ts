import {describe, expect, jest, test} from "@jest/globals";
import fs from 'fs';
import path from 'path';
import {
  SetVariableTaskDef,
  TaskType,
  WorkflowConsistency,
  WorkflowDef,
  WorkflowSignalReturnStrategy
} from "../../common";
import {orkesConductorClient} from "../../orkes";
import {WorkflowExecutor} from "../executor";
import {v4 as uuidv4} from "uuid";
import {TaskResultStatusEnum} from "../../../conductor-typescript-sdk";

describe("Executor", () => {
  const clientPromise = orkesConductorClient({ useEnvVars: true });

  jest.setTimeout(15000);
  const name = `testWorkflow-${Date.now()}`;
  const version = 1;
  test("Should be able to register a workflow", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowDefinition: WorkflowDef = {
      name,
      version,
      tasks: [
        {
          type: TaskType.SET_VARIABLE,
          name: "setVariable",
          taskReferenceName: "httpTaskRef",
          inputParameters: {
            hello: "world",
          },
        },
      ],
      inputParameters: [],
      timeoutSeconds: 15,
    };

    await expect(
      executor.registerWorkflow(true, workflowDefinition)
    ).resolves.not.toThrowError();
    const workflowDefinitionFromApi = await client.metadataResource.get(
      name,
      version
    );
    expect(workflowDefinitionFromApi.name).toEqual(name);
    expect(workflowDefinitionFromApi.version).toEqual(version);
    expect(workflowDefinitionFromApi.tasks[0].name).toEqual(
      workflowDefinition.tasks[0].name
    );
    expect(workflowDefinitionFromApi.tasks[0].taskReferenceName).toEqual(
      workflowDefinition.tasks[0].taskReferenceName
    );
    expect(workflowDefinitionFromApi.tasks[0].inputParameters).toEqual(
      (workflowDefinition.tasks[0] as SetVariableTaskDef).inputParameters
    );
  });

  let executionId: string | undefined = undefined;
  test("Should be able to start a workflow", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    executionId = await executor.startWorkflow({ name, version });
    expect(executionId).toBeTruthy();
  });

  test("Should be able to execute workflow synchronously", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const workflowRun = await executor.executeWorkflow(
      {
        name: name,
        version: version,
      },
      name,
      version,
      uuidv4()
    );
    expect(workflowRun.status).toEqual("COMPLETED");
  });

  test("Should execute workflow with Durable consistency", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowRun = await executor.executeWorkflow(
        {
          name: name,
          version: version,
        },
        name,
        version,
        uuidv4(),
        "", // waitUntilTaskRef
        undefined, // waitForSeconds
        WorkflowConsistency.DURABLE
    );

    expect(workflowRun.status).toEqual("COMPLETED");
  });

  test("Should execute workflow with Synchronous consistency", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowRun = await executor.executeWorkflow(
        {
          name: name,
          version: version,
        },
        name,
        version,
        uuidv4(),
        "", // waitUntilTaskRef
        undefined, // waitForSeconds
        WorkflowConsistency.SYNCHRONOUS
    );

    expect(workflowRun.status).toEqual("COMPLETED");
  });

  test("Should execute workflow with Return Strategy - TARGET_WORKFLOW", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowRun = await executor.executeWorkflowWithTargetWorkflow(
        {
          name: name,
          version: version,
        },
        name,
        version,
        uuidv4(),
        "", // waitUntilTaskRef
        undefined, // waitForSeconds
        WorkflowConsistency.SYNCHRONOUS
    );

    expect(workflowRun.status).toEqual("COMPLETED");
    expect(workflowRun.responseType).toEqual(WorkflowSignalReturnStrategy.TARGET_WORKFLOW);
  });

  test("Should execute workflow with Return Strategy - BLOCKING_WORKFLOW", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowRun = await executor.executeWorkflowWithBlockingWorkflow(
        {
          name: name,
          version: version,
        },
        name,
        version,
        uuidv4(),
        "", // waitUntilTaskRef
        undefined, // waitForSeconds
        WorkflowConsistency.SYNCHRONOUS
    );

    expect(workflowRun.status).toEqual("COMPLETED");
    expect(workflowRun.responseType).toEqual(WorkflowSignalReturnStrategy.BLOCKING_WORKFLOW);
  });

  test("Should be able to get workflow execution status ", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const workflowStatus = await executor.getWorkflowStatus(
      executionId!,
      true,
      true
    );
    expect(workflowStatus.status).toBeTruthy();
  });

  test("Should return workflow status detail", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const workflowStatus = await executor.getWorkflow(executionId!, true);

    expect(workflowStatus.status).toBeTruthy();
    expect(workflowStatus.tasks?.length).toBe(1);
  });
  test("Should execute a workflow with indempotency key", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);
    const idempotencyKey = uuidv4();
    const executionId = await executor.startWorkflow({
      name: name,
      version: version,
      idempotencyKey,
      idempotencyStrategy: "RETURN_EXISTING",
    });

    const executionDetails = await executor.getWorkflow(executionId!, true);
    expect(executionDetails.idempotencyKey).toEqual(idempotencyKey);
  });
});

// Helper function to load workflow definitions from JSON files
function loadWorkflowDef(filename: string): WorkflowDef {
  const filePath = path.join(__dirname, 'metadata', filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent) as WorkflowDef;
}

describe("Execute WF with diff return strategy and Signal them", () => {
  const clientPromise = orkesConductorClient({ useEnvVars: true });

  jest.setTimeout(15000);
  const name = `wait_signal_test`;
  const version = 1;

  test("Should be able to register a workflow", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    const workflowDefinition: WorkflowDef = loadWorkflowDef('wait_signal_test.json');

    await expect(
        executor.registerWorkflow(true, workflowDefinition)
    ).resolves.not.toThrowError();

    const workflowDefinitionFromApi = await client.metadataResource.get(
        name,
        version
    );

    expect(workflowDefinitionFromApi.name).toEqual(name);
    expect(workflowDefinitionFromApi.version).toEqual(version);
    expect(workflowDefinitionFromApi.tasks[0].name).toEqual(
        workflowDefinition.tasks[0].name
    );
    expect(workflowDefinitionFromApi.tasks[0].taskReferenceName).toEqual(
        workflowDefinition.tasks[0].taskReferenceName
    );
    expect(workflowDefinitionFromApi.tasks[0].inputParameters).toEqual(
        (workflowDefinition.tasks[0] as SetVariableTaskDef).inputParameters
    );
  });

  test("Should execute workflow in sync mode and verify initial state", async () => {
    const client = await clientPromise;
    const executor = new WorkflowExecutor(client);

    // Execute workflow in sync mode
    const result = await executor.executeWorkflow(
        {
          name: name,
          version: version,
        },
        name,
        version,
        uuidv4(),
        "", // waitUntilTaskRef
        undefined, // waitForSeconds
        WorkflowConsistency.SYNCHRONOUS
    );

    // Verify the response is not null and contains expected data
    expect(result).not.toBeNull();
    expect(result.workflowId).toBeDefined();

    expect(result.workflowId).toBeDefined();
    const workflowId = result.workflowId as string;

    // Verify workflow status is RUNNING
    expect(result.status).toEqual('RUNNING');

    // Verify tasks array exists and is not empty
    expect(result.tasks).toBeDefined();
    expect(Array.isArray(result.tasks)).toBe(true);
    // @ts-ignore
    expect(result.tasks.length).toBeGreaterThan(0);

    // Check first task exists and has correct status
    // @ts-ignore
    const firstTask = result.tasks[0];
    expect(firstTask).toBeDefined();
    expect(firstTask.status).toEqual('IN_PROGRESS');

    const taskOutput = { result: "success", additionalData: "test data" };
    const signalResult = await executor.signalWorkflowAndReturnTargetWorkflow(
        workflowId,
        TaskResultStatusEnum.COMPLETED,
        taskOutput
    );

    expect(signalResult).not.toBeNull();
    expect(signalResult.workflowId).toEqual(workflowId);

    // Get workflow details and verify it's completed
    const workflowDetails = await executor.getWorkflow(workflowId, true);
    expect(workflowDetails.status).toEqual('COMPLETED');

    // Verify task output was correctly set
    // @ts-ignore
    const completedTask = workflowDetails.tasks.find(task => task.referenceTaskName === taskRefName);
    expect(completedTask).toBeDefined();
    // @ts-ignore
    expect(completedTask.status).toEqual('COMPLETED');
    // @ts-ignore
    expect(completedTask.outputData).toMatchObject(taskOutput);

    return workflowId; // Return workflowId for the next test
  });
});
