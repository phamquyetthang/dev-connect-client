export const DEV = 2000;
export const SNACK_TYPE = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};
export type ISnack = keyof typeof SNACK_TYPE;
