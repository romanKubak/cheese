import React, {useState} from 'react'
import { Form, Select, InputNumber, Switch, Slider, Button, Upload, Input } from 'antd';
import { useDispatch, useSelector} from 'react-redux'
import {getOneCategory} from '../../redux/actions/categoriesAC'
const { Option } = Select;
export default function CategoryFilter() {
const categories = useSelector(state => state.categories)
const dispatch = useDispatch()





const search = (id) => {
dispatch(getOneCategory(id))

}

  return (
    <div>
      <Select
        label="Category"
        showSearch
        placeholder="Выбери категорию товара"
        optionFilterProp="children"
        // onClick={(e)=> console.log(e.target.title)}
        onChange={(id)=> search(id)}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
        className='lalala'
      >{categories.length ? categories.map(category =>  <Option value={category.id}  key ={category.id} onChange={(e)=> console.log(e.target.title)}>{category.name}</Option>):
      null

      }
       
        
      </Select>
    </div>
  )
}
