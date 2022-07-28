import { workflowGenerator } from "./WorkflowGenerator";
import { TaskType } from "./types";
import { WorkflowDef } from "./WorkflowGenerator";
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
} from "./types";

export {
  generateSimpleTask,
  generateDoWhileTask,
  generateEventTask,
  generateForkJoinTask,
  generateJoinTask,
  generateHTTPTask,
  generateInlineTask,
  generateJQTransformTask,
  generateKafkaPublishTask,
  generateSubWorkflowTask,
  generateSetVariableTask,
  generateTerminateTask,
  generateWaitTask,
};

const filledTaskDef = (task: Partial<TaskDefTypes>): TaskDefTypes => {
  const taskType = task.type;
  switch (taskType) {
    case TaskType.SIMPLE:
      return generateSimpleTask(task as SimpleTaskDef);
    case TaskType.DO_WHILE:
      return generateDoWhileTask(task as DoWhileTaskDef);
    case TaskType.EVENT:
      return generateEventTask(task as EventTaskDef);
    case TaskType.FORK_JOIN:
      /* const forkTaskWithTasks = { */
      /*   ...task, */
      /*   forkTasks: (task.forkTasks || []).map(taskMapper), */
      /* }; */
      return generateForkJoinTask(task as ForkJoinTaskDef);
    case TaskType.FORK_JOIN_DYNAMIC:
      return generateForkJoinDynamic(task as ForkJoinDynamicDef);
    case TaskType.HTTP:
      return generateHTTPTask(task as HttpTaskDef);
    case TaskType.INLINE:
      return generateInlineTask(task as InlineTaskDef);
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

export const taskGenMapper = (tasks: Partial<TaskDefTypes>[]): TaskDefTypes[] =>
  tasks.reduce((acc: TaskDefTypes[], task, idx): TaskDefTypes[] => {
    const filledTask = filledTaskDef(task);
    const maybeNextTask = tasks.length >= idx + 1 ? tasks[idx + 1] : undefined;
    return acc.concat(maybeAddJoinTask(filledTask, maybeNextTask));
  }, []);

const maybeAddJoinTask = (
  currentTask: TaskDefTypes,
  maybeNextTask?: Partial<TaskDefTypes>
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

export const generate = (overrides: Partial<WorkflowDef>) => {
  const maybeTasks: Partial<TaskDefTypes>[] = overrides.tasks || [];
  const generatedTasks: TaskDefTypes[] = taskGenMapper(maybeTasks);
  return workflowGenerator({ tasks: generatedTasks });
};
