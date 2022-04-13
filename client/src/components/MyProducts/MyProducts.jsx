import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allMyProducts } from '../../redux/actions/productAc'
import MyOneProduct from '../MyOneProduct/MyOneProduct'
import styles from './style.module.css'

export default function MyProducts() {
  const dispatch = useDispatch()

  const userID = useSelector(state => state.user.id)
  const myProduct = useSelector(state => state.myProduct)
  console.log(myProduct);
  console.log(userID);

  useEffect( () => {
    if(userID) {
      dispatch(allMyProducts(userID))
    }
  },[userID, dispatch])

  return (
    <div className={styles.main_box}>
      {myProduct.map(product => <MyOneProduct key={product.id} product={product}/>)}
    </div>
  )
}
