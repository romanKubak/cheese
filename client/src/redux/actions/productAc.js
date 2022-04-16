import axios from "axios"

export const addProduct = (formData) => async (dispatch) =>{
  console.log('values ---> ', formData)
  axios.post('http://localhost:3001/addProduct', formData, {
    withCredentials: true,
  })
  .then((data) => {
    dispatch(getOneProduct(data.data))
  })
}
export const getOneProduct = (product) => {
  return {type: 'GET_PRODUCT', payload: product}
}

export const updateProduct = (formData) => async (dispatch) =>{
  console.log('values ---> ', formData)
  axios.post('http://localhost:3001/update', formData, {
    withCredentials: true,
  })
  .then((updateProd) => {
    console.log('updateProd', updateProd);
    dispatch(getUpdateOneMyProd(updateProd.data))
  })
}

export const getUpdateOneMyProd = (obj) => {
  return {type: 'UPDATE_PRODUCT', payload: obj}
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
  dispatch(setProduct(product))
}

export const setMyProducts = (product) => {
  return {type: 'SET_MY_PRODUCT', payload: product}
}

export const allMyProducts = (id) => async(dispatch) => {
  axios.get(`http://localhost:3001/product/allMyProduct/${id}`)
    .then( (res) => {
      dispatch(setMyProducts(res.data))
    })
}
//---------asdfasdf---------------
export const deleteOneProd = (productId) => {
  return {type: 'REMOVE_MY_PRODUCT', payload: productId}
}

export const deleteProduct = (productId) => async(dispatch) =>{
  console.log('productId', productId);
  axios.post(`http://localhost:3001/product/delete/${productId}`)
    .then((data) => {
      dispatch(deleteOneProd(productId))
    })
}

export const showAllSubProducts = (id) => async(dispatch) =>{
  
  axios.post(`http://localhost:3001/product/sub/${id}`)
    .then((data) => {
      dispatch(setProduct(data.data))
    })
}

export const priceFilter = ({id,value}) => async(dispatch) => {
  
  axios.post(`http://localhost:3001/product/sub/${id}`,{value})
    .then((data) => {
      dispatch(setProduct(data.data))
      
    })
}
