import React, { useCallback, useMemo } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteOneFromCart } from '../../redux/actions/cartAC'
import { buyOneFromCart } from '../../redux/actions/cartAC'
import styles from './style.module.css'

export default function CartProduct({product}) {

  const dispatch = useDispatch()
  const buyerID = useSelector(state => state.user.id)
  const navigate = useNavigate()

  const deleteOne = () => {
    dispatch(deleteOneFromCart(buyerID))
  }

  const buyOne = async () => {
    dispatch(buyOneFromCart({buyerID: buyerID, productID: product.id, sellerID: product.seller_id}))
    navigate(`/profile/${buyerID}`)
  }

  return (
    <div className={styles.main_oneProd_box}>
    
      <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{product.price}</li>
       <button className="btn btn-danger" onClick={() => deleteOne()}>Удалить</button>
       <button className="btn btn-primary" onClick={() => buyOne()}>Заказать</button>
      </ul>
    
  </div>
  )
}
