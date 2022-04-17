import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { subReducer } from './subReducer';


import {errorReducer} from './errorReducer'
import {errorRegReducer} from './errorRegReducer'
import {commentsReducer} from './commentsReducer'

import {cartReducer} from './cartReducer'
import {productReducer} from './productReducer'
import {categoryReducer} from './categoryReducer'
import {myProductReducer} from './myProductReducer'
import {waitingListReducer} from './waitingListReducer'
import {waitingListToSendReducer} from './waitingListToSendReducer'
import {ratingReducer} from './ratingReducer'
import {sellerReducer} from './sellerReducer'
import {doneSendingReducer} from './doneSendingReducer'
import {doneReceiptReducer} from './doneReceiptReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  errorReg: errorRegReducer,
  cart: cartReducer,
  product: productReducer,
  categories: categoryReducer,
  myProduct: myProductReducer,
  sub: subReducer,
  comments: commentsReducer,
  waitingList: waitingListReducer,
  waitingListToSend: waitingListToSendReducer,
  rating: ratingReducer,
  seller: sellerReducer,
  doneSending: doneSendingReducer,
  receiptProducts: doneReceiptReducer,
});
