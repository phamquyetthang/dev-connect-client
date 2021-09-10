import { ISnack } from 'src/lib/constants';
import { ThemesName } from 'src/lib/theme/types';

export type ISnackBar = {
  id: string;
  type: ISnack;
  message: string;
};

export type IAppState = {
  loading: boolean;
  spinLoading: boolean;
  snackBar: ISnackBar[];
  theme: ThemesName;
  language: 'vn' | 'en';
};
