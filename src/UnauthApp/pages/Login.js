import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import handleAsync from '../../utils/handleAsync'
import AUTH_SERVICE from '../../services/auth_service'
import LayoutInit from './LayoutInit';
import { Link } from 'react-router-dom';
import {useAuth} from '../../AuthContext'

export default function Login(props) {
  const [, dispatch] = useAuth()

    const onFinish = async(values) => {
      const {user} = await handleAsync(()=> AUTH_SERVICE.LOGIN(values))
      localStorage.setItem('accessToken', JSON.stringify(user.accessToken))
      if(user){
        dispatch({type: 'LOGIN', payload: {user}})
      }   
    };
    
      return (
        <LayoutInit>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 8, offset: 8 }}
          
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu correo',
              },
            ]}

          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu contraseña',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item className='button-group'>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar Sesión
            </Button>
             ó <Link to="/signup" > registrate</Link>
          </Form.Item>
        </Form>
        </LayoutInit>
      );
}
