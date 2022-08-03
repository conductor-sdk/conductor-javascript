import { SubWokflowTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateSubWorkflowTask = (
  overrides: Partial<SubWokflowTaskDef> = {}
): SubWokflowTaskDef => ({
  ...nameTaskNameGenerator("subWorkflow", overrides),
  inputParameters: {},
  subWorkflowParam: {
    name: "name",
    version: 1,
    taskToDomain: {},
  },
  ...overrides,
  type: TaskType.SUB_WORKFLOW,
});
