import axios from "axios"

export const addProduct = (values) => async(dispatch) =>{
  console.log('values ---> ', values)
  axios.post('http://localhost:3001/api/upload', values, {
    withCredentials: true,
  })
  .then((data) => {
    console.log('data --> ', data);
  })
}

export const setProduct = (product) => {
  return {type: 'SET_PRODUCT', payload: product}
}

export const getProduct = () => async(dispatch) =>{
  axios.get('http://localhost:3001/product/all')
  .then((response) => {
   dispatch(setProduct(response.data))
  })

}
