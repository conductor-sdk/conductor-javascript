import { workflowGenerator } from "./WorkflowGenerator";
import { mapArrValues } from "./common";
import {
  WorkflowDefGen,
  TaskDefTypesGen,
  SwitchTaskDefGen,
  ForkJoinTaskDefGen,
  DoWhileTaskDefGen,
} from "./types";
import { generateSimpleTask } from "./SimpleTask";
import { generateDoWhileTask } from "./DoWhileTask";
import { generateEventTask } from "./EventTask";
import { generateForkJoinTask, generateJoinTask } from "./ForkJoin";
import { generateForkJoinDynamic } from "./ForkJoinDynamicTask";
import { generateHTTPTask } from "./HttpTask";
import { generateInlineTask } from "./InlineTask";
import { generateJQTransformTask } from "./JsonJQTransform";
import { generateKafkaPublishTask } from "./KafkaTask";
import { generateSubWorkflowTask } from "./SubWorkflowTask";
import { generateSetVariableTask } from "./SetVariableTask";
import { generateTerminateTask } from "./TerminateTask";
import { generateWaitTask } from "./WaitTask";
import { generateSwitchTask } from "./SwitchTask";
import {
  SimpleTaskDef,
  DoWhileTaskDef,
  EventTaskDef,
  ForkJoinTaskDef,
  JoinTaskDef,
  ForkJoinDynamicDef,
  HttpTaskDef,
  InlineTaskDef,
  JsonJQTransformTaskDef,
  KafkaPublishTaskDef,
  SubWokflowTaskDef,
  SetVariableTaskDef,
  TerminateTaskDef,
  WaitTaskDef,
  TaskDefTypes,
  TaskType,
  SwitchTaskDef,
} from "../types";

const fillSwitchTaskBranches = (
  task: Partial<SwitchTaskDefGen>
): Partial<SwitchTaskDef> => ({
  decisionCases: mapArrValues(taskGenMapper, task?.decisionCases || {}),
  defaultCase: taskGenMapper(task?.defaultCase || []),
});

const fillDoWhileTaskBranches = (
  task: Partial<DoWhileTaskDefGen>
): Partial<DoWhileTaskDef> => ({
  ...task,
  loopOver: taskGenMapper(task.loopOver || []),
});

const fillForkTasksBranches = (
  task: Partial<ForkJoinTaskDefGen>
): Partial<ForkJoinTaskDef> => ({
  ...task,
  forkTasks: (task.forkTasks || []).map(taskGenMapper),
});

const filledTaskDef = (task: Partial<TaskDefTypesGen>): TaskDefTypes => {
  const taskType = task.type;
  switch (taskType) {
    case TaskType.SWITCH:
      return generateSwitchTask(fillSwitchTaskBranches(task));
    case TaskType.SIMPLE:
      return generateSimpleTask(task as SimpleTaskDef);
    case TaskType.DO_WHILE:
      return generateDoWhileTask(fillDoWhileTaskBranches(task));
    case TaskType.EVENT:
      return generateEventTask(task as EventTaskDef);
    case TaskType.FORK_JOIN:
      return generateForkJoinTask(fillForkTasksBranches(task));
    case TaskType.FORK_JOIN_DYNAMIC:
      return generateForkJoinDynamic(task as ForkJoinDynamicDef);
    case TaskType.HTTP:
      return generateHTTPTask(task as HttpTaskDef);
    case TaskType.INLINE:
      return generateInlineTask(task as Partial<InlineTaskDef>);
    case TaskType.JOIN:
      return generateJoinTask(task as JoinTaskDef);
    case TaskType.JSON_JQ_TRANSFORM:
      return generateJQTransformTask(task as JsonJQTransformTaskDef);
    case TaskType.KAFKA_PUBLISH:
      return generateKafkaPublishTask(task as KafkaPublishTaskDef);
    case TaskType.SUB_WORKFLOW:
      return generateSubWorkflowTask(task as SubWokflowTaskDef);
    case TaskType.SET_VARIABLE:
      return generateSetVariableTask(task as SetVariableTaskDef);
    case TaskType.TERMINATE:
      return generateTerminateTask(task as TerminateTaskDef);
    case TaskType.WAIT:
      return generateWaitTask(task as WaitTaskDef);
    default:
      return generateSimpleTask(task as SimpleTaskDef);
  }
};

export const taskGenMapper = (
  tasks: Partial<TaskDefTypesGen>[]
): TaskDefTypes[] =>
  tasks.reduce((acc: TaskDefTypes[], task, idx): TaskDefTypes[] => {
    const filledTask = filledTaskDef(task);
    const maybeNextTask = tasks.length >= idx + 1 ? tasks[idx + 1] : undefined;
    return acc.concat(maybeAddJoinTask(filledTask, maybeNextTask));
  }, []);

const maybeAddJoinTask = (
  currentTask: TaskDefTypes,
  maybeNextTask?: Partial<TaskDefTypesGen>
) => {
  if (
    currentTask.type === TaskType.FORK_JOIN ||
    (currentTask.type === TaskType.FORK_JOIN_DYNAMIC &&
      maybeNextTask != null &&
      maybeNextTask.type !== TaskType.JOIN)
  ) {
    return [currentTask, generateJoinTask({})];
  }
  return currentTask;
};

export const generate = (overrides: Partial<WorkflowDefGen>) => {
  const maybeTasks: Partial<TaskDefTypesGen>[] = overrides.tasks || [];
  const generatedTasks: TaskDefTypes[] = taskGenMapper(maybeTasks);
  return workflowGenerator({ ...overrides, tasks: generatedTasks });
};
