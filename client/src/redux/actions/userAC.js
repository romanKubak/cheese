import $api from '../../http/index'

export const setErrorReg = (error) => {
  return {type: 'SET_ERROR_REG', payload: error}
}

export const regUser = (values) => async(dispatch) => {
  $api.post('/registration', values)
  .then((data) => {
    
    if( data.data?.user ) {

      localStorage.setItem('token', data.data.accessToken);
      dispatch(setUser(data.data.user));
      dispatch(setErrorReg(''))
    

    } else if (data.data?.status === 400){

      dispatch(setErrorReg(data.data.errors)) 

    } else if (data.data[0]?.value) {
      
      data.data[0].param === 'password' 
      ? dispatch(setErrorReg('Дурак пароль норм напиши'))
      : dispatch(setErrorReg('Дурак email с собакой пиши'))

    }
  })
}

export const setUser = (data) => {
  return {type: 'SET_USER', payload: data}
}


export const setError = (error) => {
  return {type: 'SET_ERROR', payload: error}
}

export const logUser = (values) => async(dispatch) =>{
  $api.post('/login', values)
  .then((data) => {
    if (data.data.status === 400) {
      dispatch(setError(data.data.errors))
    } else {
      localStorage.setItem('token', data.data.accessToken);
      dispatch(setUser(data.data.user));

      dispatch(setError(''))
    }
  })
}

export const logoutUser = () => async(dispatch) => {
  $api.post('/logout')
  .then((data) => {
    dispatch(setUser({}));
   
    localStorage.removeItem('token');
  })
}

