import { initState } from '../initState';

export const subReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_SUB':
      return payload;
  
    default:
      return state;
  }
}
