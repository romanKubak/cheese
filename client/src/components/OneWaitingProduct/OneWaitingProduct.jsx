import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import Button from '@mui/material/Button';

//? dispatch
import {confirmReceiptProductAC} from '../../redux/actions/cartAC'

export default function OneWaitingProduct({product}) {

  const dispatch = useDispatch()
  const userID = useSelector(state => state.user.id)

  const confirmReceiptOfProduct = () => {
    dispatch(confirmReceiptProductAC({user_id: userID, productID: product.id}))
  }

  return (
    <div className={styles.main_box}>
      <div className={styles.profile_card} style={{width: '18rem'}}>
        <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
        <div className={styles.box_description}>
          <div className={styles.card_body}>
            <h6 className={styles.card_title}>{product.name}</h6>
          </div>
          <div className={styles.price_card}>
            <h6>{product.price}</h6>
          </div>
        </div>
        <div className={styles.btn_group}>
          {product.statusSeller
            // ? <button className="btn btn-primary" onClick={confirmReceiptOfProduct}>Подтвердить получение</button>
            ? <Button variant="contained" className={styles.btn_delete} onClick={confirmReceiptOfProduct}>ПОЛУЧИЛ</Button>
            : <h6 style={{color: 'white'}} >Ожидается отправка</h6>
            }
        </div>
      </div>
    </div>
  )
}

