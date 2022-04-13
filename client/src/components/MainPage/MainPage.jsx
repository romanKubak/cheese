import axios from 'axios'
import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProduct} from '../../redux/actions/productAc'
import {getCategories} from '../../redux/actions/categoriesAC'

import {getCart} from '../../redux/actions/cartAC'

import Product from '../Product/Product'
import ProductFilter from '../ProductFilter/ProductFilter'
import styles from './style.module.css'
import CategoryFilter from '../CategoryFilter/CategoryFilter'


export default function MainPage() {
const dispatch = useDispatch()

const thisBuyer = useSelector(state => state.user)
// console.log('thisBuyer_id-->', thisBuyer);
const product = useSelector(state => state.product)
const cartProduct = useSelector(state => state.cart)
// console.log('cartProduct -->', cartProduct);
const [filter,setFilter] = useState(false)

useEffect(() => {
 dispatch(getProduct())
 dispatch(getCategories())
},[])

useEffect(() => {
  if(thisBuyer.email) {
    dispatch(getCart(thisBuyer.id)) 
  }
},[thisBuyer, dispatch])
const refresh = ()=> {
  dispatch(getProduct())
  
  setFilter(false)
}


  return (
    <div className={styles.main_box}>
      <CategoryFilter filter ={filter} setFilter={setFilter} />
      <ProductFilter />
      <button type="button" className="btn btn-primary" onClick={() =>refresh() }>Сбросить все фильтры</button>
      {product.length ?
      <>
       {product.map(product => <Product key={product.id} product={product}/>)}
       </>
       : <h3>Не найдено ни одного товара</h3>
      
      }
    </div>
  )
}

