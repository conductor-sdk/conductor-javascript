import { TerminateTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export const generateTerminateTask = (
  overrides: Partial<TerminateTaskDef>
): TerminateTaskDef => ({
  ...nameTaskNameGenerator("terminate", overrides),
  inputParameters: {
    terminationStatus: "COMPLETED",
    workflowOutput: {},
  },
  startDelay: 0,
  optional: false,
  type: TaskType.TERMINATE,
  ...overrides,
});
