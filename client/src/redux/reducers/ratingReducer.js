import { initState } from '../initState';

export const ratingReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_RATING':
      return payload;
  
    default:
      return state;
  }
}
