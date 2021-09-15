import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';
import { ISnack } from 'src/lib/constants';
import { ThemesName } from 'src/lib/theme/types';
import { IAppState } from './types';

const initialState: IAppState = {
  projectId: '',
  loading: false,
  spinLoading: false,
  snackBar: [],
  theme: 'light',
  language: 'vn',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loading: (state: IAppState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    spinLoading: (state: IAppState, { payload }: PayloadAction<boolean>) => {
      state.spinLoading = payload;
    },
    addSnackBar: (
      state: IAppState,
      { payload }: PayloadAction<{ type: ISnack; message: string }>
    ) => {
      state.snackBar.push({
        id: uniqueId('snack_'),
        type: payload.type,
        message: payload.message,
      });
    },
    closeSnackBar: (state: IAppState, { payload }: PayloadAction<string>) => {
      state.snackBar = state.snackBar.filter((item) => item.id !== payload);
    },
    clearSnackBar: (state: IAppState) => {
      state.snackBar = [];
    },
    onDarkMode: (state: IAppState, { payload }: PayloadAction<boolean>) => {
      state.theme = payload ? 'dark' : 'light';
    },
    changeLanguage: (
      state: IAppState,
      { payload }: PayloadAction<'vn' | 'en'>
    ) => {
      state.language = payload;
    },
    changeTheme: (state: IAppState, { payload }: PayloadAction<ThemesName>) => {
      state.theme = payload;
    },
    setProjectId: (state: IAppState, { payload }: PayloadAction<string>) => {
      state.projectId = payload;
    },
  },
});

export const {
  loading,
  spinLoading,
  addSnackBar,
  closeSnackBar,
  clearSnackBar,
  onDarkMode,
  changeLanguage,
  setProjectId,
} = appSlice.actions;

export default appSlice.reducer;
