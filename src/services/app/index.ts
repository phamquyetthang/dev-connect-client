import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loading : (state, {payload}: PayloadAction<boolean>) => {
      state.loading= payload
    }
  },
})

export const { loading } = appSlice.actions

export default appSlice.reducer
