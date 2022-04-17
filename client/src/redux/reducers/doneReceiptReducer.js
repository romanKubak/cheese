import { initState } from '../initState';

export const doneReceiptReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_RECEIPT_PRODUCTS':
      return payload;
    case 'ADD_RECEIPT_PRODUCTS':
      return [...state, payload]
    case 'REMOVE_RECEIPT_PRODUCTS':
      console.log('state', state);
      return state.filter(el => el.id !== payload)
  
    default:
      return state;
  }
}
