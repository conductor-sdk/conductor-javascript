import { TaskType, DoWhileTaskDef, TaskDefTypes } from "../../common/types";

export const doWhileTask = (
  taskRefName: string,
  terminationCondition: string,
  tasks: TaskDefTypes[]
): DoWhileTaskDef => ({
  name: taskRefName,
  taskReferenceName: taskRefName,
  loopCondition: terminationCondition,
  inputParameters: {},
  type: TaskType.DO_WHILE,
  loopOver: tasks,
});

const loopForCondition = (taskRefName: string, valueKey: string) =>
  `if ( $.${taskRefName}['iteration'] < $.${valueKey} ) { true; } else { false; }`;

export const newLoopTask = (
  taskRefName: string,
  iterations: number,
  tasks: TaskDefTypes[]
): DoWhileTaskDef => ({
  name: taskRefName,
  taskReferenceName: taskRefName,
  loopCondition: loopForCondition(taskRefName, "value"),
  inputParameters: {
    value: iterations,
  },
  type: TaskType.DO_WHILE,
  loopOver: tasks,
});
