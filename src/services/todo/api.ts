import { getService, putService } from "src/lib/helpers/connectApi";
const endpoint = "/todo";

export const getListTodoApi = () => {
  return getService(endpoint);
};

export const switchTodoItem = (id : string, newNumber: number) => {
  return putService(`${endpoint}/index`, {
    id,
    newNumber,
  });
};
