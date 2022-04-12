import axios from 'axios'
import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProduct} from '../../redux/actions/productAc'
import Product from '../Product/Product'

export default function MainPage() {
const dispatch = useDispatch()
const product = useSelector(state => state.product)

useEffect(() => {
 dispatch(getProduct())
},[])

  return (
    <div>
      {product.length ? product.map(product => <Product key={product.id} product={product}/>): null
      
      }
    </div>
  )
}

