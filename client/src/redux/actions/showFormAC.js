export const setShowForm = (boolean) => {
  console.log(boolean);
  return {type: 'SET_SHOW_FORM', payload: boolean}
}
export const setShowFormREG = (boolean) => {
  console.log(boolean);
  return {type: 'SET_SHOW_FORM_REG', payload: boolean}
}

export const showFormDisp = (boolean) => async (dispatch) => {
  dispatch(setShowForm(boolean))
}
export const showFormDispREG = (boolean) => async (dispatch) => {
  dispatch(setShowFormREG(boolean))
}

