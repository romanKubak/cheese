import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allMyProducts } from '../../redux/actions/productAc'
import MyOneProduct from '../MyOneProduct/MyOneProduct'
import styles from './style.module.css'

import OneProductToSend from '../OneProductToSend/OneProductToSend'
import OneSendingProduct from '../OneSendingProduct/OneSendingProduct'
//? dispach
import { getWatingListToSend } from '../../redux/actions/cartAC'
import { getDoneSendingProducts } from '../../redux/actions/cartAC'


export default function MySales() {
  const dispatch = useDispatch()

  const userID = useSelector(state => state.user.id)
  const productsToSend = useSelector(state => state.waitingListToSend)
  const doneSendingProducts = useSelector(state => state.doneSending)


  useEffect( () => {
    if(userID) {
      dispatch(getWatingListToSend(userID))
      dispatch(getDoneSendingProducts(userID))
    }
  },[userID, dispatch])

  return (
    // <div className={styles.main_box}>
    //   {productsToSend.map(product => <MyOneProduct key={product.id} product={product}/>)}
    // </div>
    <>
      <div className={styles.main_box}>
        <div className={styles.title}>
          Заказы ожидающие отправку ----- 
        </div>
        <div className={styles.products}>
          {productsToSend.length 
           ? productsToSend.map(product => <OneProductToSend key={product.id} product={product}/>)
           : null
          }
        </div>
      </div >
      <div className={styles.main_box}>
        <div className={styles.title}>
          Отправленные товары ----- 
        </div>
        <div className={styles.products}>
          {doneSendingProducts.length 
           ? doneSendingProducts.map(product => <OneSendingProduct key={product.id} product={product}/>)
           : null
          }
        </div>
      </div >
    </>
  )
}
