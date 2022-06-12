import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import SideBar from './SideBar';
const { Header, Content, Footer } = Layout;

import { ContainerSideBar } from './SideBar/styles';

interface ILayoutComponent {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  return (
    <ContainerSideBar>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
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
    </ContainerSideBar>
  );
};

export default LayoutComponent;
