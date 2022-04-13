import React, { useEffect } from 'react'
import styles from './style.module.css'
import {addToCart} from '../../redux/actions/cartAC'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

export default function Product({product}) {
 const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const add = ()=> {
    dispatch(addToCart({userID:user.id, productID:product.id}))
  }


  return (
    <div className={styles.main_box}>
      <div className="card" style={{width: '18rem'}}>
        <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.price}</li>
         <button className="btn btn-primary" onClick={()=> add()}>Добавить в корзину</button>
        </ul>
      </div>
    </div>
  )
}
