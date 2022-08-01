import { generateSimpleTask } from "./SimpleTask";
import { generateDoWhileTask } from "./DoWhileTask";
import { generateEventTask } from "./EventTask";
import { generateForkJoinTask, generateJoinTask } from "./ForkJoin";
import { generateHTTPTask } from "./HttpTask";
import { generateInlineTask } from "./InlineTask";
import { generateJQTransformTask } from "./JsonJQTransform";
import { generateKafkaPublishTask } from "./KafkaTask";
import { generateSubWorkflowTask } from "./SubWorkflowTask";
import { generateSetVariableTask } from "./SetVariableTask";
import { generateTerminateTask } from "./TerminateTask";
import { generateWaitTask } from "./WaitTask";
import { generateSwitchTask } from "./SwitchTask";

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
  generateSwitchTask,
};

import {
  TaskType,
  TaskDefTypes,
  DoWhileTaskDef,
  EventTaskDef,
  ForkJoinTaskDef,
  JoinTaskDef,
  ForkJoinDynamicDef,
  HttpTaskDef,
  InlineTaskDef,
  JsonJQTransformTaskDef,
  KafkaPublishTaskDef,
  SetVariableTaskDef,
  SimpleTaskDef,
  SubWokflowTaskDef,
  SwitchTaskDef,
  TerminateTaskDef,
  WaitTaskDef,
  WorkflowDef,
} from "./types";

export {
  TaskType,
  TaskDefTypes,
  DoWhileTaskDef,
  EventTaskDef,
  ForkJoinTaskDef,
  JoinTaskDef,
  ForkJoinDynamicDef,
  HttpTaskDef,
  InlineTaskDef,
  JsonJQTransformTaskDef,
  KafkaPublishTaskDef,
  SetVariableTaskDef,
  SimpleTaskDef,
  SubWokflowTaskDef,
  SwitchTaskDef,
  TerminateTaskDef,
  WaitTaskDef,
  WorkflowDef,
};

export * from "./generator";
