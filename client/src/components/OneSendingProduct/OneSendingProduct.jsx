import React from 'react'
import styles from './style.module.css'

export default function OneSendingProduct({product}) {

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
        <div>
              
        </div>
    </div>
  </div>
  )
}

