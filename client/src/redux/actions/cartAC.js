import axios from "axios"

export const addToCart = ({userID,productID}) => async(dispatch) => {
  console.log(userID, productID);
  axios.post(`http://localhost:3001/product/cart/new`,{userID:userID,productID:productID})
  .then((data) => {
    dispatch(addProductToCart(data.data))
    console.log(data);
  })
  }

export const setCart = (cart) => {
  return {type: 'SET_CART', payload: cart}
}

export const addProductToCart = (product) => {
return {type: 'ADD_CART', payload: product}
}


export const getCart = (id) => async(dispatch) => {

  axios.post(`http://localhost:3001/product/cart/${id}`)
  .then((data) => {
    dispatch(setCart(data.data))

  
  })
  }
