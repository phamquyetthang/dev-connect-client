import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import useReducer from './user';
import appReducer from './app';
import authReducer from './auth';
import projectReducer from './project';
import persistReducer from 'redux-persist/es/persistReducer';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuth'],
};
const rootReducer = combineReducers({
  app: appReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: useReducer,
  project: projectReducer,
});

export default rootReducer;
