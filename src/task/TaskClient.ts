import {HttpBaseClient} from "../http/HttpBaseClient"
import {Task, TaskResult} from "./types"

export class TaskClient extends HttpBaseClient {
  updateTask = (taskResult: TaskResult) => {
    return this.json('tasks', {
      json: taskResult,
      method: 'POST',
      headers: {
        accept: "text/plain"
      }
    }, { parseResponse: false})
  }

  logMessageForTask = async (taskId: string, message: string) => {
    if (!taskId) { throw new Error("No task ID supplied")}
    return this.json(`tasks/${taskId}/log`, { body: message}, {
      parseResponse: false
    })
  }

  pollTask = async (taskType: string, workerId: string, domain?: string) : Promise<Task | null> => {
    const query = new URLSearchParams({
      workerId,
    })

    if (domain) {
      query.append("domain", domain)
    }

    const res = await this.request(`tasks/poll/${taskType}?${query}`)
    if (res.status === 200) {
      const body = await res.json()
      return body as Task
    } else {
      return null
    }
  }
}
