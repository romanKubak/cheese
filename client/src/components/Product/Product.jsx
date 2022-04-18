import React from 'react'
import styles from './style.module.css'
import {addToCart} from '../../redux/actions/cartAC'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button';


export default function Product({product}) {
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

  const redirect = () => {
    navigate(`/cart/${user.id}`)
  }

  const repeatProd = []
  cartProducts.map((el) => {
    if(el.id === product.id) {
      repeatProd.push(el)
    }
  })

  return (
    <>
    <div className={styles.main_box}>
      <div className={styles.card}>
        <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
        <div className={styles.card_body}>
          <h5 className={styles.card_title} >{product.name}</h5>
          <p className={styles.card_text}>{product.description}</p>
          {user.id === product.User.id ? 
              <p>Это ваш товар</p>
          :
          <Link className="card-text" to={`/seller/${product.User.id}`}>Продавец {product.User.name}</Link>
        
            }

        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.price} РУБЛЕЙ</li>
          {!repeatProd.length 
            ?(user.id === product.seller_id ? null : <Button variant="contained" className={styles.btn_onBasket} onClick={()=> add()}>Добавить в корзину</Button>)
            : <Button variant="contained" className={styles.btn_navigate_on_basket} onClick={redirect}>уже в корзине</Button>
          }
         
        </ul>
      </div>
    </div>
    </>
  )
}
