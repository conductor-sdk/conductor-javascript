import { WaitTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export const generateWaitTask = (
  overrides: Partial<WaitTaskDef>
): WaitTaskDef => ({
  ...nameTaskNameGenerator("wait", overrides),
  ...overrides,
  type: TaskType.WAIT,
});
