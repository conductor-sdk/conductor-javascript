/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EventLog = {
  createdAt?: number;
  event?: string;
  eventType?: 'SEND' | 'RECEIVE';
  handlerName?: string;
  id?: string;
  taskId?: string;
  workerId?: string;
};

