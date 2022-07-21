import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface SubWokflowTask extends CommonTaskDef {
  type: TaskType.SUB_WORKFLOW;
  subWorkflowParam: {
    name: string;
    version: number;
    taskToDomain: Record<string, string>;
  };
}

export const generateSubWorkflowTask = (
  overrides: Partial<SubWokflowTask>
): SubWokflowTask => ({
  ...nameTaskNameGenerator("subWorkflow"),
  type: TaskType.SUB_WORKFLOW,
  subWorkflowParam: {
    name: "name",
    version: 1,
    taskToDomain: {},
  },
  ...overrides,
});
