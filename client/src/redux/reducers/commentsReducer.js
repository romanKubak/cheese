import { initState } from '../initState';

export const commentsReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_COMMENTS':
      return payload;
    case 'ADD_COMMENT':
      return [...state, payload]
    default:
      return state;
  }
}
