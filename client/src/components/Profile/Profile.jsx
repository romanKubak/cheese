

import React, { useEffect } from 'react'
import { seller } from '../../redux/actions/userAC';
import {useParams} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

function Profile() {
    
    const {id} = useParams()
    const user = useSelector(state => state.user);
    const isSeller = useSelector(state => state.isSeller);
    const dispatch = useDispatch();
    
const click = ()=> {
  dispatch(seller(id))
}
  

    return (
      <>{ !isSeller ? 
        <button type="button" className="btn btn-primary" onClick={() => click()}>Стать продавцом</button>:
        <button type="button" className="btn btn-primary">Добавить товар</button>

      }
   
      </>
    )
  }

export default Profile

