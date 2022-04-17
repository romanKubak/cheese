import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import styles from './style.module.css'

const Input = styled('input')({
  display: 'none',
});

export default function AddProductForm() {

  const [img, setImg] = useState('')
  const [avatar, setAvatar] = useState('')

  const sendFile = useCallback( async () => {
    const data = new FormData()
    data.append('avatar', img)
    const user = {
      name: 'roman',
      email: 'pass'
    }

    await axios.post('http://localhost:3001/upload', {data, user}, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      const path = res.data.path 
      const slicePath = path.slice(16)
      console.log('slicePath---->', slicePath);
      setAvatar(slicePath)})
  }, [img])

  const imageHandler = (e) => {
    e.preventDefault()
    console.log('e.target.files[0]', e.target.files[0]);
    setImg(e.target.files[0])
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setAvatar(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  
  return (
    <div className={styles.main}>
      <div className={styles.avatar}>
        {
          avatar.length 
            ? <img className={styles.logo} src={`${avatar}`} alt='avatar' />
            : <img className={styles.logo} src={`${img}`} alt='avatar' />
        }
      </div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" onChange={e => imageHandler(e)}/>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
          <button type="button" className="btn btn-primary" onClick={sendFile}>Сохранить</button>
        </label>
      </Stack>
      <input type='text' />
    </div>
  )
}
