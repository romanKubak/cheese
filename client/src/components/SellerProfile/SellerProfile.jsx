import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { allMyProducts } from '../../redux/actions/productAc'
import FormComment from '../FormComment/FormComment'
import SellerProduct from '../SellerProduct/SellerProduct'
import {allComments} from '../../redux/actions/userAC'
import Comment from '../Comment/Comment'

export default function SellerProfile() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [form, setForm] = useState(false );
  const user = useSelector(state => state.user)

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
    {comments.length ? comments.map( (comment) =>  <Comment key={comment.id} comment={comment}/>)
    :
    <h3>Нет ни одного комментария</h3>
    }
    {!repeatComment.length ? 
    <button variant="outlined" onClick={() => setForm(true)}>Оставить отзыв</button>:
    null
    
  }
    {form ? <FormComment setForm={setForm}/>: null}
    {myProduct.length ? myProduct.map(product => 
      <SellerProduct key={product.id} product={product}/>
    ) : 
    null
    }
    </>
  )
}
