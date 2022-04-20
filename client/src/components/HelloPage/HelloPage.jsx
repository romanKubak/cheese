import React from 'react'
import Button from '@mui/material/Button';
import styles from './style.module.css'
import {style} from './style.js'
import { useNavigate } from 'react-router-dom'

import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import {showFormDisp, showFormDispREG} from '../../redux/actions/showFormAC.js'

import { useDispatch, useSelector } from 'react-redux';

export default function HelloPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const redir = () => { 
    navigate(`/main`)
  }
  const user = useSelector(state => state.user)
  const showForm = useSelector(state => state.showForm)
  const showFormREG = useSelector(state => state.showFormREG)

  const showFormFunc = () => {
    dispatch(showFormDisp(!showForm))
    dispatch(showFormDispREG(false))
  };

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
          {showForm || showFormREG
            ? (showForm ?<SignIn /> : null || showFormREG ? <SignUp /> : null)
            : <img src = {process.env.REACT_APP_API_URL + 'photo_2022-04-18_21-23-11.jpg'} style={{width:'575px', height:'300px',paddingTop:'5px', marginTop:'20px'}} alt='...'></img>
          }
          {/* {!showFormREG
            ? null
            : <SignUp />
          } */}
          {/* <button onClick={() => showFormFunc()}>ShowForm</button> */}
        </div>
        </div>
      <div className={styles.harry}>
        
      <p style={{color: 'rgba(244, 204, 63, 1)',textAlign: 'left', paddingLeft: '100px'}}> HARRY POTTER</p>
      <p style={{marginLeft:'0px', color: 'rgba(64, 189, 121, 1)',textAlign: 'center',marginRight:'50px'}}>
      <span style={{color: 'rgba(243, 243, 243, 1)', marginLeft: '332px', marginBottom: '63px'}}>И МНОГОЕ </span>
      ДРУГОЕ
      </p>
        </div>
          {user.email
            ? <Button style={style} variant="contained" onClick={() => redir()}>Перейти к покупкам</Button>
            : <Button style={style} variant="contained" onClick={() => showFormFunc()}>Чтоб продолжить войдите</Button>
          }
      
    </div>
  )
}

