import React,{ useEffect, useState} from 'react'
import { Form, Select, InputNumber, Switch, Slider, Button, Upload, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {getSub} from '../../redux/actions/categoriesAC'
import styles from './style.module.css'

import { addProduct } from '../../redux/actions/productAc'

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};


export default function TestForm({showFrom}) {
  
  
  
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const categories = useSelector(state => state.categories)
  const subCategoryes = useSelector(state => state.sub)
  console.log(userId);
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] =  useState('')
  const [file, setFile] = useState(null)

  console.log('subCategory', subCategory);

  useEffect(() => {
    if(category !== '') {
      console.log('useEffect');
      dispatch(getSub(category))
    }
  }, [category])
  
  function onChange(value) {
    setCategory(value);
    setSubCategory(value)
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const onFinish = () => {
    const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('subCategory', subCategory)
        formData.append('userId', userId)
        formData.append('img', file)
    dispatch(addProduct(formData))
    showFrom()
  }

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
              <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                encType="multipart/form-data"
                initialValues={{
                  'input-number': 3,
                  'checkbox-group': ['A', 'B'],
                  rate: 3.5,
                }}>

                <Form.Item
                  label="Название"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: 'Введите название товара',
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Описание"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: 'Введите описание товара',
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Цена"
                  name="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: 'Введите цену товара',
                    },
                  ]} >
                  <Input />
                </Form.Item>

                <Form.Item
                   label="Категория"
                   rules={[
                    {
                      required: true,
                      message: 'Ввыберете категорию',
                    }]}>

                  <Select
                    label="Category"
                    showSearch
                    placeholder="Выбери категорию товара"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className={styles.selectInput}
                    >
                    {
                      categories.length 
                        ? categories.map(category =>  <Option value={category.id}  key ={category.id} >{category.name}</Option>)
                        : null
                    }
                  </Select>
                </Form.Item>

                <Form.Item
                   label="Подкатегория"
                   rules={[
                    {
                      required: true,
                      message: 'Ввыберете подкатегорию',
                    }]}>

                  <Select
                    label="Category"
                    showSearch
                    placeholder="Выбери категорию товара"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className={styles.selectInput}
                    >
                    {
                      subCategoryes.length 
                        ? subCategoryes.map(category =>  <Option value={category.id}  key ={category.id} >{category.title}</Option>)
                        : null
                    }
                  </Select>
                </Form.Item>

                <Form.Item
                  type="file"
                  onChange={selectFile}
                  name="images"
                  label="Загрузка"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: 'Выберете фото',
                    }]}>
                  <Upload name="logo" listType="picture">
                    <Button icon={<UploadOutlined /> } >Добавить фото</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 12,
                    offset: 6,
                  }}>
                  <Button type="primary" htmlType="submit" className={styles.btn_submit_formADDProduct}>
                    Добавить
                  </Button>
                </Form.Item>

              </Form>
      </div>
    </div>
  );
};

