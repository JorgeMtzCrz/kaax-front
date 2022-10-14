import React, { useEffect, useState } from 'react'
import { Button, Space, Table, Tag } from 'antd';

import LayoutApp from './LayoutApp'
import { useHistory } from 'react-router-dom';
import ADDRESSEE_SERVICE from '../../services/addressee_service';
import Loader from '../../components/Loader';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Apellido Paterno',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];

export const Addressee = () => {
    const [contacts, setContacts] = useState(null)
    const history = useHistory()
    useEffect(() => {
        ADDRESSEE_SERVICE.GET()
        .then(({data}) => {
            setContacts([...data.addressees])
        })
    }, [])
    console.log('contact', contacts)
    if (!contacts) return <Loader/>
    return (
        <LayoutApp>
            <Button onClick={() => history.push('addressees/create')}>Crear Registro</Button>
            <Table columns={columns} dataSource={contacts} />
        </LayoutApp>
    )
}
