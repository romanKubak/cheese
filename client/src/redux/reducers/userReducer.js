import { initState } from '../initState';

export const userReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER':
      return payload;
    case 'UPDATE_PHOTO':
      return payload;
    default:
      return state;
  }
}
