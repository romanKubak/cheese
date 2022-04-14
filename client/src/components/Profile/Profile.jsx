import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import {getCategories} from '../../redux/actions/categoriesAC'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import TestForm from '../TestForm/TestForm';

function Profile() {
    
  const {id} = useParams()
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])
 
  const showFrom = () => {
    setShowForm(!showForm)
  }

    return (
      <>
        
          <button type="button" className="btn btn-primary" onClick={() => showFrom()}>Добавить товар</button>
          <Link to='/profile/myProducts' type='button' className="btn btn-primary">Мои продукты</Link>
          
    
      {showForm 
      ? <TestForm showFrom={showFrom}/>
      : null
      }
      </>
    )
  }

export default Profile

