import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getCart} from '../../redux/actions/cartAC'
import OneSub from '../OneSub/OneSub'

import {getSub} from '../../redux/actions/categoriesAC'
import {getCategories} from '../../redux/actions/categoriesAC'

import styles from './style.module.css'

export default function SubCategories() {
  const dispatch = useDispatch()
  const sub = useSelector(state => state.sub)
  const allCategory = useSelector(state => state.categories)
  const user = useSelector(state => state.user);

  const {id} = useParams()

  useEffect(() => {
    dispatch(getCategories())
    if(allCategory.length && user.id) {
      dispatch(getSub(id))
      dispatch(getCart(user.id))
    }
  },[allCategory.length, dispatch, id, user.id])
  
  const thisCategory = allCategory.filter(el => el.id === +id)

  return (
    <>
      {thisCategory.length 
      ? (
        <div className={styles.navigation}>
          \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
          \ <Link to={`/category/${id}`} className={styles.link}>  {thisCategory[0].name.toUpperCase()}  </Link>
        </div>
        )
      : null
      }

      <div className={styles.main_box}>
          {sub.length 
            ? sub.map((sub)=> <OneSub key={sub.id} sub={sub}/>) 
            : null  
          }
      </div>
    </>

  )
}
