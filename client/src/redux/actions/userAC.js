import $api from '../../http/index'
import axios from 'axios'

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
export const setComments = (comments) => {
  return {type: 'SET_COMMENTS', payload: comments}
}
export const addComment = (comment) => {
  return {type: 'ADD_COMMENT', payload: comment}
}


export const newComment = ({values,id,user}) => async(dispatch) => {

  $api.post(`/comment/new/${id}`,{text:values.title, user:user})
  .then((response) => {
    
    dispatch(addComment(response.data))
   
  })
}


export const allComments = (id) => async(dispatch) => {
  
  $api.get(`/comments/${id}`)
  .then((response) => {

    dispatch(setComments(response.data))
   
  })
}
