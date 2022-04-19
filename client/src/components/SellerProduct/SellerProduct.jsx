import React from 'react'
import styles from './style.module.css'
import {addToCart} from '../../redux/actions/cartAC'
import {useParams,useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button';

export default function SellerProduct({product}) {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
   const cartProducts = useSelector(store => store.cart)
   const dispatch = useDispatch()
   const add = ()=> {
     if (user.name) {
       
       dispatch(addToCart({userID:user.id, productID:product.id}))
     }else {
       navigate('/signup')
     }
   }
  const repeatProd = []
  cartProducts.map((el) => {
    if(el.id === product.id) {
      repeatProd.push(el)
    }
  })
  return (
    <div className={styles.main_box}>
      <div className={styles.profile_card} style={{width: '18rem'}}>
        <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
        <div className={styles.box_description}>
          <div className={styles.card_body}>
            <h6 className={styles.card_title}>{product.name}</h6>
          </div>
          <div className={styles.price_card}>
            <h6>{product.price} ₽</h6>
          </div>
        </div>
        <div className={styles.btn_group}>
          {!repeatProd.length
            // ? <Button variant="contained" className={styles.btn_delete} onClick={confirmReceiptOfProduct}>ПОЛУЧИЛ</Button>
            ? (user.id === product.seller_id ? null : <Button variant="contained" className={styles.btn_delete} onClick={()=> add()}>в корзину</Button>)
            : <h6 style={{color: 'white'}} >уже в корзине</h6>
            }
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.price}</li>
          {!repeatProd.length 
                ?(user.id === product.seller_id ? null : <button className="btn btn-primary" onClick={()=> add()}>Добавить в корзину</button>)
                : <button className="btn btn-primary" >уже в корзине</button>
              }
        
        </ul> */}
      </div>
    </div>
  )
}
