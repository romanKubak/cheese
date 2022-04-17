import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'

//? dispatch
import {confirmReceiptProductAC} from '../../redux/actions/cartAC'

export default function OneWaitingProduct({product}) {

  const dispatch = useDispatch()
  const userID = useSelector(state => state.user.id)

  const confirmReceiptOfProduct = () => {
    console.log('Подтвердить получение');
    dispatch(confirmReceiptProductAC({user_id: userID, productID: product.id}))
  }

  return (
    <div className={styles.main_box}>
    <div className="card" style={{width: '18rem'}}>
      <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className={styles.card_text}>{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{product.price}</li>
        
        <button className="btn btn-primary" onClick={confirmReceiptOfProduct}>Подтвердить получение</button>
      </ul>
    </div>
  </div>
  )
}

