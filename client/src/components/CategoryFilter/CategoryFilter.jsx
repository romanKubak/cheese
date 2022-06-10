import React from 'react'
import { Select} from 'antd';
import { useDispatch, useSelector} from 'react-redux'
import {getOneCategory} from '../../redux/actions/categoriesAC'
const { Option } = Select;


export default function CategoryFilter({ filter, setFilter }) {
  const categories = useSelector(state => state.categories)

  const dispatch = useDispatch()

  let product

  const search = (id) => {
    dispatch(getOneCategory(id))
    product = categories.filter((category) =>  category.id === id)
    setFilter(product)
  }


  return (
    <div>
      <Select
        label="Category"
        showSearch
        placeholder="Выбери категорию товара"
        optionFilterProp="children"
        value = {filter ? filter[0].name : 'Выберите категорию товара' }
        onChange={(id)=> search(id)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        className='lalala'
      >
        {
          categories.length 
            ? categories.map(category =>  <Option value={category.id}  key ={category.id} >{category.name}</Option>)
            : null
        }
      </Select>
    </div>
  )
}
