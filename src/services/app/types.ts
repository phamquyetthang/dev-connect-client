import { ISnack } from 'src/lib/constants';

export type ISnackBar = {
  id: string;
  type: ISnack;
  message: string;
};
export type IAppState = {
  loading: boolean;
  spinLoading: boolean;
  snackBar: ISnackBar[];
};
