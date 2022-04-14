import axios from "axios"
import {setProduct} from './productAc'

export const setCategoties = (categories) => {
  return {type: 'SET_CATEGORIES', payload: categories}
}

export const getCategories = () => async(dispatch) => {
  axios.get('http://localhost:3001/categories/all')
  .then((response) => {
   dispatch(setCategoties(response.data))
  })
}
export const getOneCategory = (id) => async(dispatch) => {
  axios.get(`http://localhost:3001/categories/${id}`)
  .then((response) => {
    dispatch(setProduct(response.data))
  })
}
export const setSub = (sub) => {
  return {type: 'SET_SUB', payload: sub}
}

export const getSub = (id) => async(dispatch) => {
  axios.get(`http://localhost:3001/categories/sub/${id}`)
  .then((response) => {
    dispatch(setSub(response.data))
  })
}
