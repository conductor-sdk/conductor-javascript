export interface CommonTaskDef {
    name:string;
    taskReferenceName:string;
}

export enum TaskType {
    START = "START",
    SIMPLE = "SIMPLE",
    DYNAMIC = "DYNAMIC",
    FORK_JOIN = "FORK_JOIN",
    FORK_JOIN_DYNAMIC = "FORK_JOIN_DYNAMIC",
    DECISION = "DECISION",
    SWITCH = "SWITCH",
    JOIN = "JOIN",
    DO_WHILE = "DO_WHILE",
    SUB_WORKFLOW = "SUB_WORKFLOW",
    EVENT = "EVENT",
    WAIT = "WAIT",
    USER_DEFINED = "USER_DEFINED",
    HTTP = "HTTP",
    LAMBDA = "LAMBDA",
    INLINE = "INLINE",
    EXCLUSIVE_JOIN = "EXCLUSIVE_JOIN",
    TERMINAL = "TERMINAL",
    TERMINATE = "TERMINATE",
    KAFKA_PUBLISH = "KAFKA_PUBLISH",
    JSON_JQ_TRANSFORM = "JSON_JQ_TRANSFORM",
    SET_VARIABLE = "SET_VARIABLE",
  }
  