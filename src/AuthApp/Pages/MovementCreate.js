import React, { useEffect, useState } from 'react'
import { AutoComplete, Button, Form, Input, InputNumber } from 'antd';

import LayoutApp from './LayoutApp'
import { useHistory } from 'react-router-dom';
import MOVEMENT_SERVICE from '../../services/movement_service';
import ADDRESSEE_SERVICE from '../../services/addressee_service';

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

export const CreateMovement = () => {
    const history = useHistory()
    const [contacts, setContacts]= useState(null)
    useEffect(() => {
        ADDRESSEE_SERVICE.GET()
        .then(({data}) => {
            const dataContacts = data.addressees.map(e => {
                const response = {
                    value: `${e.alias}`,
                    id: e._id
                }
                return response
            })
            setContacts([...dataContacts])
        } )
        .catch(err => console.log('err', err))
    }, [])
    
    const onFinish = (values) => {
        MOVEMENT_SERVICE.CREATE(values)
        .then(({data}) => data && history.push('/app') )
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
                    <AutoComplete
                        options={contacts}
                    />
                </Form.Item>

                <Form.Item
                    name={'amount'}
                    label="Amount"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={'comments'}
                    label="Comentarios"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'referenceId'}
                    label="Numero de Referencia"
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
