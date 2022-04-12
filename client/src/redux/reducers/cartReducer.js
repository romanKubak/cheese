import { initState } from '../initState';

export const cartReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART':
      return payload;
    case 'ADD_CART':
      return [...state, payload]
    case 'REMOVE_CART':
      return [...state, payload]
  
    default:
      return state;
  }
}
