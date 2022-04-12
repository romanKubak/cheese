import axios from "axios"


export const setProduct = (product) => {
  return {type: 'SET_PRODUCT', payload: product}
}

export const getProduct = () => async(dispatch) =>{
  axios.get('http://localhost:3001/product/all')
  .then((response) => {
   dispatch(setProduct(response.data))
  })

}
