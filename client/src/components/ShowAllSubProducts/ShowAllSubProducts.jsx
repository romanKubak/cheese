import React from 'react'
import {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {showAllSubProducts} from '../../redux/actions/productAc'
import Product from '../Product/Product'
import ProductFilter from '../ProductFilter/ProductFilter'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import PriceFilter from '../PriceFilter/PriceFilter'
import {getCart} from '../../redux/actions/cartAC'

import {getSub} from '../../redux/actions/categoriesAC'
import {getCategories} from '../../redux/actions/categoriesAC'

import styles from './styles.module.css'

export default function ShowAllSubProducts() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const userID = useSelector(state => state.user.id)
  const allCategory = useSelector(state => state.categories)
  const allSubCategory = useSelector(state => state.sub)
console.log(product);

  useEffect(() => {
    dispatch(showAllSubProducts(id))
    if(userID) {
      dispatch(getCart(userID)) 
    }
  },[dispatch, id, userID])

  const thisSubCategory = allSubCategory.filter(el => el.id === +id)
  const thisCategoryID = thisSubCategory[0]?.category_id
  const thisCategory = allCategory.filter(el => el.id === +thisCategoryID)

  return (
    <div className={styles.ShowAllSubProducts_container}>
      {thisCategory.length 
        ? (
          <div className={styles.navigation}>
            \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
            \ <Link to={`/category/${thisCategoryID}`} className={styles.link}>{  thisCategory[0].name.toUpperCase()}  </Link>
            \ <Link to={`/sub/${id}`} className={styles.link}>  {thisSubCategory[0].title.toUpperCase()}  </Link>
          </div>
          )
        : null
      }
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
