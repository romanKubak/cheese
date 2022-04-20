import { initState } from '../initState';

export const showFormREGReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_SHOW_FORM_REG':
      return payload;
  
    default:
      return state;
  }
}
