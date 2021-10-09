import { ISnack } from 'src/lib/constants';
import { ThemesName } from 'src/lib/theme/types';

export type ISnackBar = {
  id: string;
  type: ISnack;
  message: string;
};

export interface IAppError {
  error: boolean;
  title: string;
  content: string;
  isBack?: boolean;
  navigate?: string;
}

export type IAppState = {
  projectId: string;
  loading: boolean;
  spinLoading: boolean;
  snackBar: ISnackBar[];
  theme: ThemesName;
  language: 'vn' | 'en';
  error: IAppError;
};
