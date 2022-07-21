import { WorkflowTask } from "../open-api/models/WorkflowTask";
import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface SwitchTaskDef extends CommonTaskDef {
  inputParameters: {
    switchCaseValue: string;
  };
  type: TaskType.SWITCH;
  decisionCases: Record<string, WorkflowTask[]>;
  defaultCase: WorkflowTask[];
  evaluatorType: string; // TODO this is not string
  expression: string; // TODO this is not string "switchCaseValue"
}

export const generateSwitchTask = (
  overrides: Partial<SwitchTaskDef>
): SwitchTaskDef => ({
  ...nameTaskNameGenerator("switch"),
  inputParameters: {
    switchCaseValue: "",
  },
  type: TaskType.SWITCH,
  decisionCases: {},
  defaultCase: [],
  evaluatorType: "value-param",
  expression: "switchCaseValue",
  ...overrides,
});
