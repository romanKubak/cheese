import { initState } from '../initState';

export const showFromReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_SHOW_FORM':
      return payload;
    default:
      return state;
  }
}
