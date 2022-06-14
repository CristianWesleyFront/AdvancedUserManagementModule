import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
const { Content, Footer } = Layout;
import Header from './Header';
import Breadcrumb from './Breadcrumb';
interface ILayoutComponent {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className="site-layout">
        <Header />
        <Breadcrumb />
        <Content style={{ margin: '0 16px', backgroundColor: '#EFF2F5' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
