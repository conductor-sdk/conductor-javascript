import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface SimpleTaskDef extends CommonTaskDef {
  type: TaskType.SIMPLE;
}

export const generateSimpleTask = (
  overrides: Partial<SimpleTaskDef>
): SimpleTaskDef => ({
  ...nameTaskNameGenerator("simple"),
  ...overrides,
  type: TaskType.SIMPLE,
});
