import React from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
export default function AllCategories({category}) {
const navigate = useNavigate()

const add = (id) => {
  navigate(`/category/${id}`)
}

  return (
    <div>
      <div className={styles.main_box} onClick={()=> add(category.id)}>
      <div className="cards" style={{width: '18rem'}}>
        <img src={process.env.REACT_APP_API_URL + category.img} className={styles.card_img_top} alt="..."/>
        <div className={styles.card_body}>
          <h5 className="card-title">{category.name}</h5>
        </div>
      </div>
    </div>
    </div>
  )
}
