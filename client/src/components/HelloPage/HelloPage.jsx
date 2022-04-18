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
    <div>
      <Button style={style} variant="contained" onClick={() => redir()}>Перейти к покупкам</Button>
    </div>
  )
}

