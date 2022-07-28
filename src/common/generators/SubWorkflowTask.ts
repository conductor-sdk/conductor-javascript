import { SubWokflowTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export const generateSubWorkflowTask = (
  overrides: Partial<SubWokflowTaskDef>
): SubWokflowTaskDef => ({
  ...nameTaskNameGenerator("subWorkflow", overrides),
  type: TaskType.SUB_WORKFLOW,
  subWorkflowParam: {
    name: "name",
    version: 1,
    taskToDomain: {},
  },
  ...overrides,
});
