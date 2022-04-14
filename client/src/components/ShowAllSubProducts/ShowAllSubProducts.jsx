import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {showAllSubProducts} from '../../redux/actions/productAc'
import Product from '../Product/Product'
export default function ShowAllSubProducts() {
const {id} = useParams()
const dispatch = useDispatch()
const product = useSelector(state => state.product)

  useEffect(() => {
dispatch(showAllSubProducts(id))
  },[id])
  return (
    <div>
{product.length ? product.map(product => 
  <Product key={product.id} product={product}/>
) : 
null
}
    </div>
  )
}
