import { combineReducers } from 'redux';

import { userReducer } from './userReducer';


import {errorReducer} from './errorReducer'
import {errorRegReducer} from './errorRegReducer'
import {sellerReducer} from './sellerReducer'

export const rootReducer = combineReducers({
  user: userReducer,

  error: errorReducer,
  errorReg: errorRegReducer,
  isSeller: sellerReducer,
});
