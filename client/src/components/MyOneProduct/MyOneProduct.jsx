import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import {deleteProduct} from '../../redux/actions/productAc'

export default function MyOneProduct({product}) {

  const dispatch = useDispatch()

  const deleteOne = () => {
    dispatch(deleteProduct(product.id))
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
        <button className="btn btn-primary" onClick={() => deleteOne()}>Удалить</button>
      </ul>
    </div>
  </div>
  )
}

