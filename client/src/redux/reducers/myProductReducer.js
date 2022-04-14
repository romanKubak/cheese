import { initState } from '../initState';

export const myProductReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_MY_PRODUCT':
      return payload;
    case 'REMOVE_MY_PRODUCT':
      return state.filter(el => el.id !== payload)
  
    default:
      return state;
  }
}
