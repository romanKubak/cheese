import React from 'react'
import styles from './style.module.css'
import {Link, useNavigate} from 'react-router-dom'

export default function OneSub({sub}) {
const navigate = useNavigate()

  const add = (id) => {
    navigate(`/sub/${id}`)
  }
  return (
    <div>
      <div className={styles.main_box} onClick={()=> add(sub.id)}>
        <div className="cards" style={{width: '18rem'}}>
          <img src={process.env.REACT_APP_API_URL + sub.img} className={styles.card_img_top} alt="..."/>
          <div className={styles.card_body}>
            <h5 className="card-title">{sub.title}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
