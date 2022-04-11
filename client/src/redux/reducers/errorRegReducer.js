import { initState } from '../initState';

export const errorRegReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_ERROR_REG':
      return payload;
  
    default:
      return state;
  }
}
