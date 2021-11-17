import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getService } from 'src/lib/helpers/connectApi';
import { loading } from '../app';
import { IUserState } from './types';

const initialState: IUserState = {
  _id: '',
  first_name: '',
  last_name: '',
  email: '',
  project_id: '',
  position: '',
  permissions: [],
  createdAt: '',
};
export const getUserInfoService = createAsyncThunk(
  'user/getInfo',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(loading(true));
    try {
      const userInfo = await getService('/user/info');
      const preferences = await getService('/user/preferences');
      return { ...userInfo, preferences } as IUserState;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loading(false));
    }
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(String(getUserInfoService.pending), (state: IUserState) => {
        state = initialState;
      })
      .addCase(
        String(getUserInfoService.fulfilled),
        (state: IUserState, { payload }: PayloadAction<IUserState>) => {
          state.first_name = payload.first_name;
          state.last_name = payload.last_name;
          state.email = payload.email;
          state._id = payload._id;
          state.preferences = payload.preferences;
        }
      )
      .addCase(getUserInfoService.rejected, (state: IUserState) => {
        state = initialState;
      });
  },
});

export default userSlice.reducer;
