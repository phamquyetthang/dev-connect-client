import {
  getService,
  postService,
  putService,
} from 'src/lib/helpers/connectApi';
import { IEditTodoReq, ITodoItem } from './types';
const endpoint = '/todo';

export const getListTodoApi = () => {
  return getService(endpoint);
};

export const switchTodoItem = (id: string, newNumber: number) => {
  return putService(`${endpoint}/index`, {
    id,
    newNumber,
  });
};

export const updateStatusItem = (id: string, status: boolean) => {
  return putService(endpoint, {
    id,
    status,
  });
};

export const updateTodoItem = (item: IEditTodoReq) => {
  return putService(endpoint, item);
};

export const createTodoItem = (item: ITodoItem) => {
  return postService(`${endpoint}`, {
    title: item?.title,
    description: item?.description,
  });
};
