import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import TestForm from '../TestForm/TestForm';

import styles from './style.module.css'
import MyOneProduct from '../MyOneProduct/MyOneProduct'

import {getCategories} from '../../redux/actions/categoriesAC'
import { allMyProducts } from '../../redux/actions/productAc'
import {getWatingList} from '../../redux/actions/cartAC'
import OneWaitingProduct from '../OneWaitingProduct/OneWaitingProduct';

function Profile() {
    
  const {id} = useParams()
  const user = useSelector(state => state.user);
  const myProduct = useSelector(state => state.myProduct)
  const myWaitingList = useSelector(state => state.waitingList)

  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getWatingList(id))

    if(user.id) {
      dispatch(allMyProducts(user.id))
    }

  },[dispatch, id, user.id])
 
  const showFrom = () => {
    setShowForm(!showForm)
  }

    return (
      <>
        
          <button type="button" className="btn btn-primary" onClick={() => showFrom()}>Добавить товар</button>
          <Link to='/profile/myProducts' type='button' className="btn btn-primary">Мои продукты</Link>
          
    
      {showForm 
      ? <TestForm showFrom={showFrom}/>
      : null
      }
          <div className={styles.main_box}>
            <div className={styles.title}>
              Мои товары
            </div>
            <div className={styles.products}>
              {myProduct.map(product => <MyOneProduct key={product.id} product={product}/>)}
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.title}>
              Заказы в ожидании ----- 
            </div>
            <div className={styles.products}>
              {myWaitingList.map(product => <OneWaitingProduct key={product.id} product={product}/>)}
            </div>
          </div >

          <div className={styles.main_box}>
            <div>Мои покупки -------</div>
            {'Тут должны быть выполненные заказы'}
          </div>
      </>
    )
  }

export default Profile

