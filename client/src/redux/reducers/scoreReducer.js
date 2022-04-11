import { initState } from '../initState';

export const scoreReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_SCORE':
      return payload + state;
    case 'REMOVE_SCORE':
      return state - payload;
      case 'GET_SCORE' :
        return payload
    default:
      return state;
  }
};

