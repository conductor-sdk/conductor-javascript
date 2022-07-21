import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface WaitTaskDef extends CommonTaskDef {
  type: TaskType.WAIT;
}

export const generateWaitTask = (
  overrides: Partial<WaitTaskDef>
): WaitTaskDef => ({
  ...nameTaskNameGenerator("wait"),
  ...overrides,
  type: TaskType.WAIT,
});
