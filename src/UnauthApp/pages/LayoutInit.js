import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;
export default function LayoutInit(props) {
  return (
    <Layout className="layout">
      <Content className='content-unauth'>
        {props.children}
      </Content>
    </Layout>
  )
}
