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

export * from "./generator";
