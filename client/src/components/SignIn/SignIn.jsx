import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logUser } from '../../redux/actions/userAC';
import styles from './style.module.css'

export default function SignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user)
  const error = useSelector(state => state.error) // Сообщение ошибки 
  console.log('error --->', error);

  useEffect(() => user.email && navigate('/'), [ user.email ])

  const onFinish = (values) => {
    dispatch(logUser(values))
  }

  return (

    <div className={styles.formBox}>
      <div className={styles.container}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Введите свой email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите свой password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit"> Войти </Button>
          </Form.Item>
          <h6>
            у вас нет аккаунта? 
          <Link to='/signup'> Зарегистрироваться</Link>
          </h6>
          <div>
            {
              error.length 
              ? <h4>{error}</h4> 
              : null
            }
          </div>
        </Form>
      </div>
    </div>
  );
};


