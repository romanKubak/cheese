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
      <div className={styles.main_box}>
      <div className="card" style={{width: '18rem'}}>
        <img src={process.env.REACT_APP_API_URL + category.img} className={styles.card_img_top} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{category.name}</h5>
         
        </div>
        <ul className="list-group list-group-flush">
          
        
        <button className="btn btn-primary" onClick={()=> add(category.id)}>Подробнее</button>
            
         
         
        </ul>
      </div>
    </div>
    </div>
  )
}
