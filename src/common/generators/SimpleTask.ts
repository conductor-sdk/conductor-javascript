import { SimpleTaskDef, TaskType } from "../types";
import { nameTaskNameGenerator } from "./common";

export const generateSimpleTask = (
  overrides: Partial<SimpleTaskDef> = {}
): SimpleTaskDef => ({
  ...nameTaskNameGenerator("simple", overrides),
  ...overrides,
  type: TaskType.SIMPLE,
});
