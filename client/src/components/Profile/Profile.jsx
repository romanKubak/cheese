

import React, { useEffect } from 'react'
import { seller } from '../../redux/actions/userAC';
import {useParams, Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import AddProductForm from '../AddProductForm/AddProductForm';
import TestForm from '../TestForm/TestForm';

function Profile() {
    
  const {id} = useParams()
  const user = useSelector(state => state.user);
  const isSeller = useSelector(state => state.isSeller);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)
    
  const click = ()=> {
    dispatch(seller(id))
  }
  const showFrom = () => {
    setShowForm(!showForm)
  }

    return (
      <>{ !isSeller 
          ? <button type="button" className="btn btn-primary" onClick={() => click()}>Стать продавцом</button>
          : <>
          <button type="button" className="btn btn-primary" onClick={() => showFrom()}>Добавить товар</button>
          <Link to='/profile/myProducts' type='button' className="btn btn-primary">Мои продукты</Link>
          </>
      }
      {showForm 
      ? <TestForm />
      : null
      }
      </>
    )
  }

export default Profile

