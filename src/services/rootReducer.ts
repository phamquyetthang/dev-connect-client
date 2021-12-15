import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import useReducer from './user';
import appReducer from './app';
import authReducer from './auth';
import projectReducer from './project';
import docReducer from './doc';
import persistReducer from 'redux-persist/es/persistReducer';
const appPersistConfig = {
  key: 'app',
  storage,
  whitelist: ['projectId', 'projectName', 'theme', 'language'],
};
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuth'],
};

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  user: useReducer,
  project: projectReducer,
  doc: docReducer,
});

export default rootReducer;
