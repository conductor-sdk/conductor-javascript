import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface TerminateTaskDef extends CommonTaskDef {
  inputParameters: {
    terminationStatus: string; // TODO it aint string.
    workflowOutput: Record<string, string>;
  };
  type: TaskType.TERMINATE;
  startDelay: number;
  optional: boolean;
}

export const generateTerminateTask = (
  overrides: Partial<TerminateTaskDef>
): TerminateTaskDef => ({
  ...nameTaskNameGenerator("terminate"),
  inputParameters: {
    terminationStatus: "COMPLETED",
    workflowOutput: {},
  },
  startDelay: 0,
  optional: false,
  type: TaskType.TERMINATE,
  ...overrides,
});
