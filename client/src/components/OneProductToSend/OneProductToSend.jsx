import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import Button from '@mui/material/Button';

//? dispatch
import { confirmSendProductAC } from '../../redux/actions/cartAC'


export default function OneProductToSend({product}) {

  const dispatch = useDispatch()
  const sellerID = useSelector(state => state.user.id)

  const confirmSendProduct = () => {
    dispatch(confirmSendProductAC({seller_id: sellerID, productID: product.id}))
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
          <Button variant="contained" className={styles.btn_delete} onClick={confirmSendProduct}>ОТПРАВИТЬ</Button>
        </div>
        
        {/* <button className="btn btn-primary" onClick={confirmSendProduct}>Подтвердить отправку</button> */}
     
    </div>
  </div>
  )
}

