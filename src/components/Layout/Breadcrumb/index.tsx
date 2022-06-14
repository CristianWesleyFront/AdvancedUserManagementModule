import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divider, Typography } from 'antd';
import { BreadcrumbComponent as Breadcrumb } from './styles';

const breadcrumbNameMap: Record<string, string> = {
  '/user-management': 'user-management',
  '/user-management/users': 'Users List',
};

const BreadcrumbComponent: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Breadcrumb>
      <Typography.Title level={4}>
        {breadcrumbNameMap[location.pathname]}
      </Typography.Title>
      <Divider type="vertical" />
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
