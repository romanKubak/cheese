
import React from 'react'
import { Form, Input, Button,  } from 'antd';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {newComment} from '../../redux/actions/userAC'
import styles from './style.module.css'

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
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px', backgroundColor: '#353535', paddingTop: '20px'}}>


  
    <Form
      name="basic"
      labelCol={{ span: 8}}
      wrapperCol={{ span: 16, fontColor: 'white' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.form_comment}
    >
      <Form.Item
        label="Отзыв"
        name="title"
        rules={[{ required: true, message: 'Пожалуйста напишите комментарий' }]}
        style={{color: 'white'}}
      >
        <Input />
      </Form.Item>

      <Form.Item
       label="Rating"
       name="rating"
       style={{fontColor: 'white'}}
      >

<Rate allowHalf defaultValue={0}></Rate>
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          ОТПРАВИТЬ
        </Button>
      </Form.Item>
    </Form>

    </div>
  )
}
