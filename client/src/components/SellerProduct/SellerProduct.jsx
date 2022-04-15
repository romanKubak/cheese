import React from 'react'
import styles from './style.module.css'
import {addToCart} from '../../redux/actions/cartAC'
import {useParams,useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

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
    <div className="card" style={{width: '18rem'}}>
    <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{product.price}</li>
      {!repeatProd.length 
            ?(user.id === product.seller_id ? null : <button className="btn btn-primary" onClick={()=> add()}>Добавить в корзину</button>)
            : <button className="btn btn-primary" >уже в корзине</button>
          }
     
    </ul>
  </div>
  )
}
