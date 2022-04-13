import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getFilterProducts} from '../../redux/actions/productAc'
import {getProduct} from '../../redux/actions/productAc'

export default function ProductFilter() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const product = useSelector(state => state.product)
  
  const filteredProducts = product.filter(el=> el.name.toLowerCase().includes(input.toLowerCase()))
  


  useEffect(() => {
    if (input.length > 0) {
      dispatch(getFilterProducts(filteredProducts));
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
