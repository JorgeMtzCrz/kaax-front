import React from 'react'
import { Button, Form, Input } from 'antd';
import LayoutInit from './LayoutInit';
import { Link } from 'react-router-dom';
import AUTH_SERVICE from '../../services/auth_service'
import handleAsync from "../../utils/handleAsync";
import {useHistory} from 'react-router-dom'

const layout = {
  labelCol: {
    span: 6,
    offset: 8
  },
  wrapperCol: {
    span: 8,
    offset: 8
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
};

/* eslint-enable no-template-curly-in-string */
export default function Signup() {
    const history = useHistory()

    const onFinish = async (values) => {
      const {user} = await handleAsync(()=> AUTH_SERVICE.SIGNUP(values))
      if(user){
        history.push('/')
      } else{
      }
    };
    
      return (
        <LayoutInit>
        <Form layout="vertical" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name="name"
            label="Nombre"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            name='email'
            label="Correo Electronico"
            rules={[
              {
                type: 'email',
                required: true
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Registrate
            </Button>
             ó <Link to="/" >Inicia Sesión</Link>
          </Form.Item>
        </Form>
        
        </LayoutInit>
      );
}
