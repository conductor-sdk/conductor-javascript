import { WorkflowDef, TaskDefTypes } from "../../common/types";

export const workflow = (name: string, tasks: TaskDefTypes[]): WorkflowDef => ({
  name,
  version: 1,
  tasks,
  inputParameters: [],
  timeoutSeconds: 0,
});
