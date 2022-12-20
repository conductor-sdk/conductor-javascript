import { TaskType, SimpleTaskDef } from "../types";

export const simpleTask = (
  taskReferenceName: string,
  name: string
): SimpleTaskDef => ({
  name,
  taskReferenceName,
  inputParameters: {},
  type: TaskType.SIMPLE,
});
