import React from 'react'
import { Space, Spin } from 'antd';

export default function Loader() {
  return (
    <Space className='spinner-container' size="large">
        <Spin size="large" />
    </Space>
  )
}
