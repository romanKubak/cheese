import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getSub} from '../../redux/actions/categoriesAC'
import OneSub from '../OneSub/OneSub'

import styles from './style.module.css'

export default function SubCategories() {
const dispatch = useDispatch()
const sub = useSelector(state => state.sub)
  const {id} = useParams()
  useEffect(() => {
    dispatch(getSub(id))
  },[id])
  return (
    <>
      <div className={styles.main_box}>
          {sub.length 
            ? sub.map((sub)=> <OneSub key={sub.id} sub={sub}/>) 
            : null  
          }
      </div>
    </>

  )
}
