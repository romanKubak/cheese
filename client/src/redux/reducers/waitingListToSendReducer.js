import { initState } from '../initState';

export const waitingListToSendReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_WAITING_LIST_TO_SEND':
      return payload;
    case 'ADD_WAITING_LIST_TO_SEND':
      return [...state, payload]
    case 'REMOVE_WAITING_LIST_TO_SEND':
      console.log('state', state);
      return state.filter(el => el.id !== payload)
  
    default:
      return state;
  }
}
