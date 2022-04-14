import axios from 'axios'
import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProduct} from '../../redux/actions/productAc'
import {getCategories} from '../../redux/actions/categoriesAC'

import {getCart} from '../../redux/actions/cartAC'
import ProductFilter from '../ProductFilter/ProductFilter'
import styles from './style.module.css'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import AllCategories from '../AllCategories/AllCategories'


export default function MainPage() {
const dispatch = useDispatch()

const thisBuyer = useSelector(state => state.user)
const categories = useSelector(state => state.categories)
const cartProduct = useSelector(state => state.cart)
const [filter,setFilter] = useState(false)

useEffect(() => {
//  dispatch(getProduct())
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
      
      
      {categories.length ?
      <>
       {categories.map(category => <AllCategories key={category.id} category={category}/>)}
       </>
       : <h3>Не найдено ни одной категории</h3>
      
      }
    </div>
  )
}

