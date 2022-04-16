import { initState } from '../initState';

export const sellerReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_SELLER':
      return payload;
  
    default:
      return state;
  }
}
