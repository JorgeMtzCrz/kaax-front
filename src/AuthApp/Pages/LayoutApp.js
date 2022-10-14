import {
  DesktopOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AUTH_SERVICE from '../../services/auth_service'
import { useAuth } from '../../AuthContext'
import handleAsync from '../../utils/handleAsync'

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}




export default function LayoutApp(props) {
  const [, dispatch] = useAuth()
  const logout = async () => {
    await handleAsync(AUTH_SERVICE.LOGOUT)
    localStorage.removeItem('accessToken')
    dispatch({ type: 'LOGOUT' })
  }
  const location = useLocation()

  const items = [
    getItem(<Link to="/app">Inicio</Link>, '/app', <HomeOutlined />),
    getItem(<Link to="/app/addressees">Contactos</Link>, '/app/addressees', <UserOutlined />),

    getItem(<p style={{marginTop: '13px'}} onClick={logout}>Cerrar Sesión</p>, 'logout', <LogoutOutlined onClick={logout}/>),
  ];
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline" items={items} />

      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 0,
              minHeight: 360,
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Gokaax ©2022 
        </Footer>
      </Layout>
    </Layout>
  );
}
