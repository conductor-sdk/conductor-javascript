/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Task } from './Task';
import {SignalResponse} from "./SignalResponse";

export interface WorkflowRun extends SignalResponse {
  priority?: number;
  variables?: Record<string, any>;
  tasks?: Array<Task>;
  createdBy?: string;
  createTime?: number;
  status?: string;
  updateTime?: number;
}
