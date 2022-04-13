import axios from "axios"

export const addProduct = (formData) => async (dispatch) =>{
  console.log('values ---> ', formData)
  axios.post('http://localhost:3001/addProduct', formData, {
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
export const getFilterProducts = (product) => async(dispatch) => {
   axios.post('http://localhost:3001/product/filter', { product })
   .then((response) => {
    dispatch(setProduct(response.data))
   })
}
