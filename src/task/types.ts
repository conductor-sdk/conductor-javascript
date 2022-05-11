/* TODO(@ntomlin) generate these from json schema */

// TODO(@ntomlin): allow typing this generically?
export type ConductorData = Record<string, any>
export const TaskResultStatus = {
  'IN_PROGRESS': 'IN_PROGRESS',
  'FAILED': 'FAILED',
  'FAILED_WITH_TERMINAL_ERROR': 'FAILED_WITH_TERMINAL_ERROR',
  'COMPLETED': 'COMPLETED',
} as const
export type TaskResultStatuses = typeof TaskResultStatus
export type TaskResultStatusType = TaskResultStatuses[keyof TaskResultStatuses]

export const TaskStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  CANCELED: 'CANCELLED',
  FAILED: 'FAILED',
  FAILED_WITH_TERMINAL_ERROR: 'FAILED_WITH_TERMINAL_ERROR',
  COMPLETED: 'COMPLETED',
  COMPLETED_WITH_ERRORS: 'COMPLETED_WITH_ERRORS',
  SCHEDULED: 'SCHEDULED',
  TIMED_OUT: 'TIMED_OUT',
  SKIPPED: 'SKIPPED'
} as const

export type TaskStatuses = typeof TaskResultStatus
export type TaskStatusType = TaskStatuses[keyof TaskStatuses]

export interface TaskRunnerResult {
  status: TaskResultStatusType
  outputData: ConductorData
  workflowInstanceId: string
  reasonForIncompletion?: string,
  taskId: string
  workerId?: string
}

export type WorkerResult = Omit<TaskRunnerResult, "workflowInstanceId" | "taskId" | "workerId">

export interface Task {
  taskId: string
  status: TaskStatusType
  inputData: ConductorData
  workflowInstanceId: string
  reasonForIncompletion?: string,
}
