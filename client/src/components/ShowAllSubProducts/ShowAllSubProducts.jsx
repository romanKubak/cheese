import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {showAllSubProducts} from '../../redux/actions/productAc'
import Product from '../Product/Product'
import ProductFilter from '../ProductFilter/ProductFilter'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import PriceFilter from '../PriceFilter/PriceFilter'
import {getCart} from '../../redux/actions/cartAC'

import styles from './styles.module.css'

export default function ShowAllSubProducts() {
const {id} = useParams()
const dispatch = useDispatch()
const product = useSelector(state => state.product)
const userID = useSelector(state => state.user.id)

  useEffect(() => {
    dispatch(showAllSubProducts(id))
    dispatch(getCart(userID)) 
  },[dispatch, id, userID])
  return (
    <div>
      <div className={styles.filtres}>
        <div className={styles.search}>
          <ProductFilter />
        </div>
        <div className={styles.priceFilter}>
          <PriceFilter/>
        </div>
      </div>
      <div className={styles.container}>
        {product.length 
          ? product.map(product => <Product key={product.id} product={product}/>) 
          : null
        }
      </div>
    </div>
  )
}
