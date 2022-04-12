import { initState } from '../initState';

export const productReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_PRODUCT':
      return payload;
    case 'ADD_PRODUCT':
      return [...state, payload]
    case 'REMOVE_PRODUCT':
      return [...state, payload]
  
    default:
      return state;
  }
}
