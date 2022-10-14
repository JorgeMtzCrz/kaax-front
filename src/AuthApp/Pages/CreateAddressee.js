import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';

import LayoutApp from './LayoutApp'
import ADDRESSEE_SERVICE from '../../services/addressee_service';
import { useHistory } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
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

export const CreateAddressee = () => {
    const history = useHistory()
    const onFinish = (values) => {
        ADDRESSEE_SERVICE.CREATE(values)
        .then(({data}) => data && history.push('/app/addressees') )
        .catch(err => console.log('err',err))
    };
    return (
        <LayoutApp>
            <h2>Registrar contacto</h2>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={'name'}
                    label="Nombre"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input type='text' />
                </Form.Item>
                <Form.Item
                    name={'lastName'}
                    label="Apellido Paterno"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input type='text' />
                </Form.Item>
                <Form.Item
                    name={'familyName'}
                    label="Apellido Materno"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input type='text' />
                </Form.Item>
                <Form.Item
                    name={'accountNumber'}
                    label="Numero de Cuenta"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'alias'}
                    label="Alias"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </LayoutApp>
    )
}
