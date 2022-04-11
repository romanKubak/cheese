import { combineReducers } from 'redux';

import { userReducer } from './userReducer';

import { scoreReducer } from './scoreReducer';
import {errorReducer} from './errorReducer'
import {errorRegReducer} from './errorRegReducer'
import {sellerReducer} from './sellerReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  score: scoreReducer,
  error: errorReducer,
  errorReg: errorRegReducer,
  isSeller: sellerReducer,
});
