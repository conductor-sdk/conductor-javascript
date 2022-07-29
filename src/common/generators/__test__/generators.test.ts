import { expect, describe, it } from "@jest/globals";
import { generate, generateSimpleTask } from "../index";
import { TaskType,ForkJoinTaskDef } from "../types";

describe("Generate", () => {
  it("Should generate an empty workflow", () => {
    const wf = generate({});
    expect(wf.name).not.toBe("");
    expect(wf.tasks).toEqual([]);
  });

  it("Should generate a workflow with 3 simple tasks", () => {
    const wf = generate({
      tasks: [
        { type: TaskType.SIMPLE },
        { type: TaskType.SIMPLE },
        { type: TaskType.SIMPLE },
      ],
    });
    expect(wf.name).not.toBe("");
    expect(
      wf.tasks.every(
        ({ name, taskReferenceName, type }) =>
          name !== "" && taskReferenceName !== "" && type === TaskType.SIMPLE
      )
    ).toBe(true);
  });

  it("Should generate a workflow and take into account nested tasks", () => {
    const wf = generate({
      name: "tripReservation",
      tasks: [
        {
          type: TaskType.FORK_JOIN,
          forkTasks: [
            [
              {
                type: TaskType.HTTP,
                inputParameters: {
                  http_request: { uri: "http://airline1.com", method: "GET" },
                },
                name: "airline1",
              },
            ],
            [
              {
                type: TaskType.HTTP,
                inputParameters: {
                  http_request: { uri: "http://airline2.com", method: "GET" },
                },
                name: "airline2",
              },
            ],
            [
              {
                type: TaskType.HTTP,
                inputParameters: {
                  http_request: { uri: "http://airline3.com", method: "GET" },
                },
                name: "airline3",
              },
            ],
          ],
        },
        { type: TaskType.SIMPLE, name: "compute_lowest_price" },
        { type: TaskType.SIMPLE, name: "make_reservation" },
        generateSimpleTask({ name: "send_email" }),
      ],
    });
    expect(
      wf.tasks.every(
        ({ name, taskReferenceName }) => name !== "" && taskReferenceName !== ""
      )
    ).toBe(true);
    const [firstForkTask] = wf.tasks;
    expect(
      (firstForkTask as ForkJoinTaskDef).forkTasks.flat().every(
        ({ name, taskReferenceName }) => name !== "" && taskReferenceName !== ""
      )
    ).toBe(true);
    
  });
});
