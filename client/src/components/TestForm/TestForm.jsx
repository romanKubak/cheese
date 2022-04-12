import React, { useState } from 'react'
import { Form, Select, InputNumber, Switch, Slider, Button, Upload, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

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


export default function TestForm() {
  
  
  
  const dispatch = useDispatch();


  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)


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
        formData.append('img', file)
    dispatch(addProduct(formData))
  }

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      encType="multipart/form-data"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >

        <Form.Item
          label="Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Введите name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Введите description',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Введите price',
            },
          ]}
        >
          <Input />
        </Form.Item>
                <Form.Item
          label="Price"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Введите price',
            },
          ]}
        >
          <Input />
        </Form.Item>

      <Form.Item
        type="file"
        onChange={selectFile}
        name="images"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Добавь фоточку"
      >
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined /> } >Жмякай</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

