import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getCart} from '../../redux/actions/cartAC'
export default function ShoppingCart() {
const dispatch = useDispatch()
const {id} = useParams()
//! Сделать запрос на корзину юзера 
useEffect(() => {
  dispatch(getCart(id)) 
},[])
  return (
    <div>


      
    </div>
  )
}
