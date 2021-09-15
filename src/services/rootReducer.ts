import { combineReducers } from '@reduxjs/toolkit';
import useReducer from './user';
import appReducer from './app';
import authReducer from './auth';
import projectReducer from './project';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: useReducer,
  project: projectReducer,
});

export default rootReducer;
