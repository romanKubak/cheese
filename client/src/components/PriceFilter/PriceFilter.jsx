import React, {useState} from 'react'
import { Form, Select, InputNumber, Switch, Slider, Button, Upload, Input } from 'antd';
import { useDispatch, useSelector} from 'react-redux'
import {priceFilter} from '../../redux/actions/productAc'
import {useParams} from 'react-router-dom'
const { Option } = Select;

export default function PriceFilter() {

const {id} = useParams()

  

const dispatch = useDispatch()

let product

const search = (value) => {
// dispatch(getOneCategory(id))
if (value === 'Сначала дорогие'){
  dispatch(priceFilter({id,value:1}))
}else if (value === 'Сначала дешевые') {
  dispatch(priceFilter({id,value:2}))
}
}
  return (
    <div>
   
      
      
      <Select
        label="Category"
        showSearch
        placeholder="Фильтр по цене"
        optionFilterProp="children"
        onChange={(value)=> search(value)}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
        className='lalala'
      > 
       <Option  value='Сначала дорогие'  >Сначала дорогие</Option>
       <Option   value ='Сначала дешевые' >Сначала дешевые</Option>
    
      </Select>
      
    </div>
  )
}

