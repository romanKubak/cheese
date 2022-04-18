import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getFilterProducts} from '../../redux/actions/productAc'
import {getProduct,showAllSubProducts} from '../../redux/actions/productAc'
import styles from './style.module.css'

import {useParams} from 'react-router-dom'

export default function ProductFilter({filter}) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const product = useSelector(state => state.product)
  const {id} = useParams()
  
  const filteredProducts = product.filter(el=> el.name.toLowerCase().includes(input.toLowerCase()))
  

  useEffect(() => {
    if (!filter) {
      setInput('')
    }
  },[])

  useEffect(() => {
    if (input.length > 0) {
      dispatch(getFilterProducts(filteredProducts));
    }else{
      dispatch(showAllSubProducts(id))
    }
  }, [input]);

  return (
    <div className={styles.search_box}>
      <input 
        type="text" 
        className="form-control" 
        id="word" name="word" 
        value={input ?? ''} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder='Поиск по названию'
        />
    </div>
  )
}
