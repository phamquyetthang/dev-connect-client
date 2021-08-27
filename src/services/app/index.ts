import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';
import { ISnack } from 'src/lib/constants';
import { IAppState } from './types';

const initialState: IAppState = {
  loading: false,
  spinLoading: false,
  snackBar: [],
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
  },
});

export const {
  loading,
  spinLoading,
  addSnackBar,
  closeSnackBar,
  clearSnackBar,
} = appSlice.actions;

export default appSlice.reducer;
