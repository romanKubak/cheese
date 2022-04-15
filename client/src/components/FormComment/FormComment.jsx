
import React from 'react'
import { Form, Input, Button,  } from 'antd';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {newComment} from '../../redux/actions/userAC'

export default function FormComment({setForm}) {
  const { id } = useParams();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
    const onFinish = (values) => {
     
     dispatch(newComment({id,values,user:user.name}))
        setForm(false)
  
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>


  
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Comment"
        name="title"
        rules={[{ required: true, message: 'Please input your comment!' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>
  )
}
