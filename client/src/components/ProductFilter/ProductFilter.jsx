import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getFilterProducts} from '../../redux/actions/productAc'
import {getProduct} from '../../redux/actions/productAc'

export default function ProductFilter() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
 


  useEffect(() => {
    if (input.length > 0) {
      dispatch(getFilterProducts(input));
    }else{
      dispatch(getProduct())
    }
  }, [input]);
  return (
    <div>
  <input type="text" className="form-control" id="word" name="word" value={input ?? ''} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}
