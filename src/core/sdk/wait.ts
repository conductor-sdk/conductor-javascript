import { TaskType, WaitTaskDef } from "../../common/types";

export const waitTaskDuration = (taskReferenceName:string,duration:string):WaitTaskDef =>({
    name:taskReferenceName,
    taskReferenceName,
    inputParameters:{
        duration
    },
    type:TaskType.WAIT
});

export const waitTaskUntil = (taskReferenceName:string,until:string):WaitTaskDef =>({
    name:taskReferenceName,
    taskReferenceName,
    inputParameters:{
        until
    },
    type:TaskType.WAIT
})