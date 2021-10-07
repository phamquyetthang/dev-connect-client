import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ROUTER_NAME from 'src/lib/constants/router';
import { loading, createAppErr, setProjectId } from '../app';
import { getInfoProjectApi } from './api';
import { IProjectInfoRes, IProjectState } from './types';

const initialState: IProjectState = {
  loading: false,
  error: '',
};
export const getInfoService = createAsyncThunk(
  'project/getInfo',
  async ({ id }: { id: string }, thunkAPI) => {
    thunkAPI.dispatch(loading(true));
    try {
      const response = await getInfoProjectApi(id);
      return response as IProjectInfoRes;
    } catch (error) {
      thunkAPI.dispatch(setProjectId(''));
      thunkAPI.dispatch(
        createAppErr({
          title: error as string,
          navigate: ROUTER_NAME.welcome.path,
        })
      );
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loading(false));
    }
  }
);
const projectSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoService.pending, (state: IProjectState) => {
        state.loading = true;
      })
      .addCase(
        getInfoService.fulfilled,
        (state: IProjectState, { payload }: PayloadAction<IProjectInfoRes>) => {
          state.loading = false;
          state.error = '';
          state.info = {
            ...payload,
          };
        }
      )
      .addCase(
        getInfoService.rejected,
        (state: IProjectState, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export default projectSlice.reducer;
