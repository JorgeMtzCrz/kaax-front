import React, {useEffect, useState} from 'react'
import { Button, Table, Space } from 'antd';

import LayoutApp from './LayoutApp'
import { useHistory } from 'react-router-dom';
import ADDRESSEE_SERVICE from '../../services/addressee_service';
import Loader from '../../components/Loader';
import MOVEMENT_SERVICE from '../../services/movement_service';

const columns = [
    {
        title: 'Monto',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Comentarios',
        dataIndex: 'comments',
        key: 'comments',
    },
];
export const Profile = () => {
    const [movements, setMovements] = useState(null)
    const history = useHistory()
    useEffect(() => {
        MOVEMENT_SERVICE.GET()
        .then(({data}) => {
            setMovements([...data.movements])
        })
    }, [])
    if (!movements) return <Loader/>
  return (
    <LayoutApp>
        <Button onClick={() => history.push('app/movements/create')}>Crear Registro</Button>
        <Table columns={columns} dataSource={movements} />

    </LayoutApp>
  )
}
