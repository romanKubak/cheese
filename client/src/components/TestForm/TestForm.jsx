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
  
  const [img, setImg] = useState('')
  console.log('img --->', img);
  const [avatar, setAvatar] = useState('')
  
  const dispatch = useDispatch();

  const normFile = (e) => {
    setImg(e.file)
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const onFinish = (values) => {
    // const data = new FormData()
    // data.append('avatar', img)
    dispatch(addProduct(values))
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
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Введите titile',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Body"
          name="body"
          rules={[
            {
              required: true,
              message: 'Введите body',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
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
        name="category"
        label="Категория"
        rules={[
          {
            required: true,
            message: 'Выберете категорию',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Выберете категорию по кайфу">
          <Option value="red">крутой сыр</Option>
          <Option value="green">зеленный сыр</Option>
          <Option value="blue">вонючий сыр</Option>
        </Select>
      </Form.Item>

      <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={100} max={10000} />
        </Form.Item>
        <span className="ant-form-text"> цена</span>
      </Form.Item>

      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </Form.Item>



      <Form.Item
        name="images"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      {/* <Form.Item label="Dragger">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item> */}

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

