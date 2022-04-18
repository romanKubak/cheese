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
        <div style={{color: 'rgba(183, 60, 55, 1)'}}>MARVEL</div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{color: 'rgba(243, 243, 243, 1)'}}>&#8211;</div>
        <div style={{color: 'rgba(51, 116, 234, 1)'}}> DC</div>
        </div>
        <div style={{color: 'rgba(243, 243, 243, 1)', paddingLeft: '450px'}}>STAR WARS</div>
        </div>
        <div style={{paddingRight:'80px'}}>
          <img src = {process.env.REACT_APP_API_URL + 'photo_2022-04-18_21-23-11.jpg'} style={{width:'700px', height:'413px',paddingTop:'50px'}}></img>
        </div>
        </div>
      <div className={styles.harry}>
        
      <div style={{color: 'rgba(244, 204, 63, 1)'}}> HARRY POTTER</div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{color: 'rgba(243, 243, 243, 1)'}}>И МНОГОЕ </div>
      <div style={{marginLeft:'30px', color: 'rgba(64, 189, 121, 1)'}}> ДРУГОЕ</div>
      </div>
        </div>
    
      <Button style={style} variant="contained" onClick={() => redir()}>Перейти к покупкам</Button>
    </div>
  )
}

