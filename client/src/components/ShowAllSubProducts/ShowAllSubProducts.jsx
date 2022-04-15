import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {showAllSubProducts} from '../../redux/actions/productAc'
import Product from '../Product/Product'
import ProductFilter from '../ProductFilter/ProductFilter'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import PriceFilter from '../PriceFilter/PriceFilter'
export default function ShowAllSubProducts() {
const {id} = useParams()
const dispatch = useDispatch()
const product = useSelector(state => state.product)

  useEffect(() => {
dispatch(showAllSubProducts(id))
  },[id])
  return (
    <div>


      <ProductFilter />
      <PriceFilter/>
{product.length ? product.map(product => 
  <Product key={product.id} product={product}/>
) : 
null
}
    </div>
  )
}
