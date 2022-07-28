export const randomChars = (n = 7): string =>
  (Math.random() + 1).toString(36).substring(n);

export const workflowNameGenerator = ()=>
  `workflow___${randomChars(7)}`;
  
export const taskNameGenerator = (taskType: string) =>
  `${taskType}__task_${randomChars(7)}`;

export const taskReferenceNameGenerator = (taskName: string) =>
  `${taskName}_ref`;

export const nameTaskNameGenerator = (taskType: string) => {
  const name = taskNameGenerator(taskType);
  return {
    name,
    taskReferenceName: taskReferenceNameGenerator(name),
  };
};
