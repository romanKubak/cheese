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
        <p style={{color: 'rgba(183, 60, 55, 1)',textAlign: 'left', paddingLeft: '100px'}}>MARVEL</p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <span style={{color: 'rgba(243, 243, 243, 1)', paddingLeft: '102px'}}>&#8211;</span>
        <p style={{ color: 'rgba(51, 116, 234, 1)',textAlign: 'left', paddingLeft: '72px'}}>
         DC</p>
         </div>
        <p style={{color: 'rgba(243, 243, 243, 1)', paddingLeft: '228px'}}>STAR WARS</p>
        </div>
        <div style={{paddingRight:'80px'}}>
          <img src = {process.env.REACT_APP_API_URL + 'photo_2022-04-18_21-23-11.jpg'} style={{width:'575px', height:'300px',paddingTop:'5px', marginTop:'20px'}}></img>
        </div>
        </div>
      <div className={styles.harry}>
        
      <p style={{color: 'rgba(244, 204, 63, 1)',textAlign: 'left', paddingLeft: '100px'}}> HARRY POTTER</p>
      <p style={{marginLeft:'0px', color: 'rgba(64, 189, 121, 1)',textAlign: 'center',marginRight:'50px'}}>
      <span style={{color: 'rgba(243, 243, 243, 1)', marginLeft: '332px', marginBottom: '63px'}}>И МНОГОЕ </span>
      ДРУГОЕ
      </p>
        </div>
    
      <Button style={style} variant="contained" onClick={() => redir()}>Перейти к покупкам</Button>
    </div>
  )
}

