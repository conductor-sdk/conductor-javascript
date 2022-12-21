import { WorkflowDef, TaskDefTypes } from "../types";

export const workflow = (name: string, tasks: TaskDefTypes[]): WorkflowDef => ({
  name,
  version: 1,
  tasks,
  inputParameters: [],
  timeoutSeconds: 0,
});
