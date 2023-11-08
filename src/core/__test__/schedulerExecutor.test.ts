import { expect, describe, test, jest } from "@jest/globals";
import { OrkesApiConfig, orkesConductorClient } from "../../orkes";
import { SchedulerExecutor } from "../schedulerClient";
import { SaveScheduleRequest, TaskType, WorkflowDef } from "../../common";

const playConfig: Partial<OrkesApiConfig> = {
  keyId: `${process.env.KEY_ID}`,
  keySecret: `${process.env.KEY_SECRET}`,
  serverUrl: `${process.env.SERVER_URL}`,
};

describe("ScheduleExecutor", () => {
  const clientPromise = orkesConductorClient(playConfig);
  jest.setTimeout(15000);

  const name = `testSchedule`;
  const cronExpression = "0/5 * * ? * *"; //every 5 second

  const workflowName = "testScheduleWf";
  const workflowVersion = 1;

  test("Should be able to register a workflow and retrieve it", async () => {
    const client = await clientPromise;
    const executor = new SchedulerExecutor(client);

    const workflowDefinition: WorkflowDef = {
      name: workflowName,
      version: workflowVersion,
      description: "Test Workflow for Scheduler",
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

    await client.metadataResource.create(workflowDefinition, true);

    const workflowDefinitionFromApi = await client.metadataResource.get(
      workflowName,
      workflowVersion
    );

    expect(workflowDefinitionFromApi.name).toEqual(workflowName);
    expect(workflowDefinitionFromApi.version).toEqual(workflowVersion);

    const schedulerDefinition: SaveScheduleRequest = {
      name,
      cronExpression,

      paused: false,
      runCatchupScheduleInstances: false,
      scheduleStartTime: 0,
      scheduleEndTime: 0,
      startWorkflowRequest: {
        name: workflowDefinitionFromApi.name,
        version: workflowDefinitionFromApi.version,
        input: {},
        correlationId: "",
        taskToDomain: {},
        priority: 0,
      },
    };
    await expect(
      executor.registerSchedule(schedulerDefinition)
    ).resolves.not.toThrowError();
    const scheduler = await executor.getExecution(name);
    expect(scheduler.name).toEqual(name);
    expect(scheduler.cronExpression).toEqual(cronExpression);
  });

  test("Should be able to resume the schedule", async () => {
    const client = await clientPromise;
    const executor = new SchedulerExecutor(client);
    await executor.startResume(name);
    const scheduler = await executor.getExecution(name);
    expect(scheduler.paused).toBeFalsy();
  });

  test("Should be able to see the result in executed schedule", async () => {
    const client = await clientPromise;
    const executor = new SchedulerExecutor(client);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const result = await executor.searchExecution(
      0,
      15,
      "startTime:DESC",
      "",
      `scheduleName IN (${name})`
    );
    expect(result?.results?.length).toBeGreaterThan(0);
  });

  test("Should be able to pause the schedule", async () => {
    const client = await clientPromise;
    const executor = new SchedulerExecutor(client);
    await executor.pauseExecution(name);
    const scheduler = await executor.getExecution(name);
    expect(scheduler.paused).toBeTruthy();
  });

  test("Should be able to delete the schedule", async () => {
    const client = await clientPromise;
    const executor = new SchedulerExecutor(client);
    await executor.deleteExecution(name);
    // delete workflowDef too
    await client.metadataResource.unregisterWorkflowDef(
      workflowName,
      workflowVersion
    );
    const schedulerList = await client.schedulerResource.getAllSchedules();
    const testSchedule = schedulerList.some(
      (schedule) => schedule.name === name
    );
    expect(testSchedule).toBeFalsy();
  });
});