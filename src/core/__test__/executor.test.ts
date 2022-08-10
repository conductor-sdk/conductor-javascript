import { expect, describe, test } from "@jest/globals";
import {
  OrkesApiConfig,
  orkesConductorClient,
  SetVariableTaskDef,
  TaskType,
  WorkflowDef,
} from "../../common";
import { WorkflowExecutor } from "../executor";

const playConfig: Partial<OrkesApiConfig> = {
  keyId: "aa17000e-a478-48cd-ae5c-d54c0fd850de",
  keySecret: "HUh57n1Q4DT5psfU0A42PDpwxID4ln5OgwNcSSWXXXzRqsJA",
  serverUrl: "https://pg-staging.orkesconductor.com/api",
};

describe("Executor", () => {
  const clientPromise = orkesConductorClient(playConfig);

  const name = "testWorkflow";
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
          name: "variable_setter",
          taskReferenceName: "variable_setter_ref",
          inputParameters: {
            name: "someVariable",
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

  test("Should return not found if there is an error", async () => {
  });
});
