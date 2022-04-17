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


export const deleteOneProdCart = (productId) => {
  return {type: 'REMOVE_CART', payload: productId}
}

export const deleteOneFromCart = (productId) => async(dispatch) =>{
  console.log('productId', productId);
  axios.post(`http://localhost:3001/product/${productId}`)
    .then((data) => {
      dispatch(deleteOneProdCart(productId))
    })
}

export const buyOneFromCart = (data) => async(dispatch) => {
  // console.log('buyerID -- from AC', data);
  axios.post(`http://localhost:3001/setOrder`, data)
  .then((data) => {
    dispatch(deleteOneProdCart(data.data.newOrder.product_id))
    dispatch(addProductToWaitingList(data.data.unComplitetProductInOrder))
  })
}

export const addProductToWaitingList = (product) => {
  return {type: 'ADD_WAITING_LIST', payload: product}
  }

export const getWatingList = (id) => async(dispatch) => {
  axios.post(`http://localhost:3001/waitingList/${id}`)
  .then((data) => {
    console.log(data);
    dispatch(setWaitingList(data.data))
  })
}

export const setWaitingList = (watingProducts) => {
  return {type: 'SET_WAITING_LIST', payload: watingProducts}
}

// seller CAB ------
export const getWatingListToSend = (id) => async(dispatch) => {
  console.log(id);
  axios.post(`http://localhost:3001/waitingListToSend/${id}`)
  .then((data) => {
    console.log(data);
    dispatch(setWaitingListToSend(data.data))
  })
}
export const setWaitingListToSend = (watingProductsToSend) => {
  return {type: 'SET_WAITING_LIST_TO_SEND', payload: watingProductsToSend}
}

export const confirmSendProductAC = (data) => (dispatch) => {
  console.log(data);
  axios.post(`http://localhost:3001/sendProduct`, data)
    .then((data) => {
      console.log(data);
      dispatch(removeOneFromWaitingList(data.data.id))
      dispatch(pushProductDoneSending(data.data))
    })
}
export const removeOneFromWaitingList = (productId) => {
  return {type: 'REMOVE_WAITING_LIST_TO_SEND', payload: productId}
}

export const pushProductDoneSending = (product) => {
  return {type: 'ADD_SENDING_PRODUCTS', payload: product}
}

export const getDoneSendingProducts = (id) => async(dispatch) => {
  axios.post(`http://localhost:3001/getDoneSendingProducts/${id}`)
    .then((data) => {
      dispatch(setDoneSendingProducts(data.data))
    })
}

export const setDoneSendingProducts = (doneProductsToSend) => {
  return {type: 'SET_SENDING_PRODUCTS', payload: doneProductsToSend}
}
