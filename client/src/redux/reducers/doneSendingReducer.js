import { initState } from '../initState';

export const doneSendingReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_SENDING_PRODUCTS':
      return payload;
    case 'ADD_SENDING_PRODUCTS':
      return [...state, payload]
    case 'REMOVE_SENDING_PRODUCTS':
      console.log('state', state);
      return state.filter(el => el.id !== payload)
  
    default:
      return state;
  }
}
