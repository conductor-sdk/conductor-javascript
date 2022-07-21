import { WorkflowTask } from "../open-api/models/WorkflowTask";
import { CommonTaskDef, TaskType } from "./types";
import { nameTaskNameGenerator } from "./common";

export interface DoWhileTaskDef extends CommonTaskDef {
    inputParameters: Record<string,string>,
    type:TaskType.DO_WHILE,
    decisionCases: Record<string,WorkflowTask[]>,
    startDelay: number,
    optional: boolean,
    asyncComplete: boolean,
    loopCondition: string,
    loopOver: WorkflowTask[], 
}

export const generateDoWhileTask = (overrides:Partial<DoWhileTaskDef>)=>({
  ...nameTaskNameGenerator("doWhile"),
    inputParameters:{},
    type:TaskType.DO_WHILE,
    decisionCases: {},
    startDelay: 0,
    optional: false,
    asyncComplete: false,
    loopCondition: "",
    loopOver: [], 
});