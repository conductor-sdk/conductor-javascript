import { WaitTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";


export const generateWaitTask = (
  overrides: Partial<WaitTaskDef>
): WaitTaskDef => ({
  ...nameTaskNameGenerator("wait"),
  ...overrides,
  type: TaskType.WAIT,
});
