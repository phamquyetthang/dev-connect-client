import { combineReducers } from '@reduxjs/toolkit';
import useReducer from './user';
import appReducer from './app';
import authReducer from './auth';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: useReducer,
});

export default rootReducer;
