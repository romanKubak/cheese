import { initState } from '../initState';

export const waitingListReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_WAITING_LIST':
      return payload;
    case 'ADD_WAITING_LIST':
      return [...state, payload]
    case 'REMOVE_WAITING_LIST':
      console.log('state', state);
      return state.filter(el => el.id !== payload)
  
    default:
      return state;
  }
}
