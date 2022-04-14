import { initState } from '../initState';

export const myProductReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_MY_PRODUCT':
      return payload;
    case 'REMOVE_MY_PRODUCT':
      return state.filter(el => el.id !== payload);
    case 'UPDATE_PRODUCT':
      return state.map((el) => {
        if(el.id === payload.id){
           el = payload
        }
        return el
      })
    default:
      return state;
  }
}
