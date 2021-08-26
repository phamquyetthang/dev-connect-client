import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './app/index';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
