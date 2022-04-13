import axios from 'axios'
import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProduct} from '../../redux/actions/productAc'

import {getCart} from '../../redux/actions/cartAC'

import Product from '../Product/Product'
import ProductFilter from '../ProductFilter/ProductFilter'
import styles from './style.module.css'


export default function MainPage() {
const dispatch = useDispatch()

const thisBuyer = useSelector(state => state.user)
// console.log('thisBuyer_id-->', thisBuyer);
const product = useSelector(state => state.product)
const cartProduct = useSelector(state => state.cart)
// console.log('cartProduct -->', cartProduct);

useEffect(() => {
 dispatch(getProduct())
},[])

useEffect(() => {
  if(thisBuyer.email) {
    dispatch(getCart(thisBuyer.id)) 
  }
},[thisBuyer, dispatch])



  return (
    <div className={styles.main_box}>
      
      <ProductFilter/>
      {product.length ?
      <>
       {product.map(product => <Product key={product.id} product={product}/>)}
       </>
       : <h3>Не найдено ни одного товара</h3>
      
      }
    </div>
  )
}

