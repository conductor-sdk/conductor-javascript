import { TaskType, SimpleTaskDef } from "../types";

export const simpleTask = (
  taskReferenceName: string,
  name: string,
  inputParameters:Record<string,unknown>
): SimpleTaskDef => ({
  name,
  taskReferenceName,
  inputParameters,
  type: TaskType.SIMPLE,
});
