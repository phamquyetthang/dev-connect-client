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
  error: {
    error: false,
    title: '',
    content: '',
    isBack: false,
  },
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
    createAppErr: (
      state: IAppState,
      {
        payload,
      }: PayloadAction<{
        title: string;
        content?: string;
        isBack?: boolean;
        navigate?: string;
      }>
    ) => {
      state.error = {
        error: true,
        title: payload.title,
        content: payload.content || payload.title,
        isBack: payload.isBack || false,
        navigate: payload.navigate || '',
      };
    },
    clearAppErr: (state: IAppState) => {
      state.error = {
        error: false,
        title: '',
        content: '',
        isBack: false,
      };
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
  createAppErr,
  clearAppErr,
} = appSlice.actions;

export default appSlice.reducer;
