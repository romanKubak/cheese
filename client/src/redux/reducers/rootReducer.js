import { combineReducers } from 'redux';

import { userReducer } from './userReducer';


import {errorReducer} from './errorReducer'
import {errorRegReducer} from './errorRegReducer'
import {sellerReducer} from './sellerReducer'
import {cartReducer} from './cartReducer'
import {productReducer} from './productReducer'
import {categoryReducer} from './categoryReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  errorReg: errorRegReducer,
  isSeller: sellerReducer,
  cart: cartReducer,
  product: productReducer,
  categories: categoryReducer,
});
