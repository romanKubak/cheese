import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { allMyProducts } from '../../redux/actions/productAc'
import FormComment from '../FormComment/FormComment'
import SellerProduct from '../SellerProduct/SellerProduct'
import {allComments} from '../../redux/actions/userAC'
import Comment from '../Comment/Comment'
import { Rate } from 'antd';
import Button from '@mui/material/Button';

import styles from './style.module.css'
// import { Link } from '@mui/material'

export default function SellerProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  const rating = useSelector(state => state.rating)
  const sellerName = useSelector(state => state.seller.name)
  const sellerImg = useSelector(state => state.seller.img)
  // const sellerName = useSelector(state => state.seller.name)
  const [form, setForm] = useState(false );
  const user = useSelector(state => state.user)
  console.log(Number(rating))

  const myProduct = useSelector(state => state.myProduct)
  const comments = useSelector(state => state.comments)
  const repeatComment = []
  comments.map((el) => {
    if(el.user_name === user.name) {
      repeatComment.push(el)
    }
  })

  useEffect( () => {
    if(id) {
      dispatch(allMyProducts(id))
      dispatch(allComments(id))
    }
  },[id, dispatch])
  return (
    <>
      <div className={styles.navigation}>
          \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
          \ <Link to='' className={styles.link} onClick={() => navigate(-1)}>  НАЗАД  </Link>
        </div> 
      <div className={styles.seller_container}>

        <div className={styles.seller_profile_info}>
        <img src={process.env.REACT_APP_API_URL + sellerImg} className={styles.profile_img} alt="..."/>
        <h6>{sellerName}</h6>
        <h4>Рейтинг: {rating}<Rate allowHalf disabled value={Number(rating)} /></h4>
        <h3>Комментарии</h3>
          {comments.length 
            ? comments.map( (comment) =>  <Comment key={comment.id} comment={comment}/>)
            : <h6>Нет ни одного комментария</h6>
          }

          {form 
            ? <FormComment setForm={setForm}/>
            : null
          }

          {!repeatComment.length 
            // ? <button variant="outlined" onClick={() => setForm(true)}>Оставить отзыв</button>
            ? (form ? null : <Button variant="contained" className={styles.btn_addProduct} onClick={() => setForm(true)}>Оставить отзыв</Button>)
            : null
          }
      

        </div>

        <div className={styles.seller_products}>
          {myProduct.length 
            ? myProduct.map(product => <SellerProduct key={product.id} product={product}/>) 
            : null
          }
        </div>
      </div>

    </>
  )
}
