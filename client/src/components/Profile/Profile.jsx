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
import {getDoneList} from '../../redux/actions/cartAC'
import OneWaitingProduct from '../OneWaitingProduct/OneWaitingProduct';
import OneSendingProduct from '../OneSendingProduct/OneSendingProduct';

function Profile() {
    
  const {id} = useParams()
  const user = useSelector(state => state.user);
  const myProduct = useSelector(state => state.myProduct)
  const myWaitingList = useSelector(state => state.waitingList)
  const myReceiptProducts = useSelector(state => state.receiptProducts)

  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    
    if(user.id) {
      dispatch(getCategories())
      dispatch(getWatingList(id))
      dispatch(getDoneList(id))
      dispatch(allMyProducts(user.id))
    }

  },[dispatch, id, user.id])
 
  const showFrom = () => {
    setShowForm(!showForm)
  }

    return (
      <>
        <div className={styles.navigation}>
            \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
            \ <Link to={`/profile/${user.id}`} className={styles.link}>  ПРОФИЛЬ  </Link>
        </div>
        
          <button type="button" className="btn btn-primary" onClick={() => showFrom()}>Добавить товар</button>
          <Link to='/profile/mySales' type='button' className="btn btn-primary">Мои продажи</Link>
          
    
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
            <div className={styles.title}>
              Мои покупки -------
            </div>
            <div className={styles.products}>
              {myReceiptProducts.length
                ? myReceiptProducts.map(product => <OneSendingProduct key={product.id} product={product}/>)
                :null
              }
            </div>
          </div>
      </>
    )
  }

export default Profile

