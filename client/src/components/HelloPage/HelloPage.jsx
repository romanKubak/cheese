import React from 'react'
import Button from '@mui/material/Button';
import styles from './style.module.css'
import {style} from './style.js'
import { useNavigate } from 'react-router-dom'

export default function HelloPage() {
  const navigate = useNavigate()
  const redir = () => { 
    navigate(`/main`)
  }
  console.log(style);
  return (
    <div >
    <div className={styles.container}>
        <div className={styles.marvel}>
        <div style={{}}>MARVEL</div>
        <div>- DC</div>
        <div>STAR WARS</div>
        </div>
        <div style={{paddingRight:'80px'}}>
          <img src = {process.env.REACT_APP_API_URL + 'photo_2022-04-18_21-23-11.jpg'} style={{width:'600px', height:'363px'}}></img>
        </div>
        </div>
      <div>
        
      <div> HARRY POTTER</div>
      <div>И МНОГОЕ ДРУГОЕ</div>
       
        </div>
    
      <Button style={style} variant="contained" onClick={() => redir()}>Перейти к покупкам</Button>
    </div>
  )
}

