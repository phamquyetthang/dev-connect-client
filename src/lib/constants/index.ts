export const DEV = 2000;
export const SNACK_TYPE = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};
export type ISnack = keyof typeof SNACK_TYPE;


export const DATA_TYPES = {
  
}

export enum METHOD_API {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
}