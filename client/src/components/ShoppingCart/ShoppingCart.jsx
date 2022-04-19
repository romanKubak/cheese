import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {getCart} from '../../redux/actions/cartAC'
import CartProduct from '../CartProduct/CartProduct'

import styles from './style.module.css'

export default function ShoppingCart() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const products = useSelector(state => state.cart)
  //! Сделать запрос на корзину юзера 
  useEffect(() => {
    dispatch(getCart(id)) 
  },[])

  console.log('products', products);

  return (
    <div className={styles.main_box}>     
        <div className={styles.navigation}>
          \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
          \ <Link to={`/cart/${id}`} className={styles.link}>  КОРЗИНА  </Link>
        </div> 
      {products.length 
        ? products.map(product => <CartProduct key={product.id} product={product}/>)
        : null
      }
    </div>
  )
}
