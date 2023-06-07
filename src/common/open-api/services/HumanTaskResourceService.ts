/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from '../models/Task';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HumanTaskResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Conductor task by id (for human tasks only)
   * @param taskId
   * @returns Task OK
   * @throws ApiError
   */
  public getConductorTaskById(
    taskId: string,
  ): CancelablePromise<Task> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/human/tasks/{taskId}/conductorTask',
      path: {
        'taskId': taskId,
      },
    });
  }

}
