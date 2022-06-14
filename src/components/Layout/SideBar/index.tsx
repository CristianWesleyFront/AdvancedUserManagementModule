import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DesktopOutlined } from '@ant-design/icons';
import {
  RiShieldUserFill,
  RiFileUserFill,
  RiBriefcase2Line,
} from 'react-icons/ri';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import { SideBar } from './styles';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface ISubItemLabel {
  text: string;
}

const SubItemLabel: React.FC<ISubItemLabel> = ({ text }) => {
  return (
    <div className="menu-label">
      <span className="menu-bullet">
        <span className="bullet bullet-dot"></span>
      </span>
      <span className="menu-title">{text}</span>
    </div>
  );
};

const items: MenuItem[] = [
  getItem(<Link to="dashboard">Dashboard</Link>, '1', <DesktopOutlined />),
  getItem('User Manegment', 'sub2', <RiShieldUserFill />, [
    getItem('Users', 'sub2.1', <RiFileUserFill />, [
      getItem(
        <Link to="/user-management/users">
          <SubItemLabel text="Users List" />
        </Link>,
        'sub2.1.1',
      ),
      getItem(
        <Link to="/user-management/ViewUser">
          <SubItemLabel text="View User" />{' '}
        </Link>,
        'sub2.1.2',
      ),
    ]),
    getItem('Roles', 'sub2.2', <RiBriefcase2Line />, [
      getItem(
        <Link to="/user-management/RolesList">
          <SubItemLabel text="Roles List" />
        </Link>,
        'sub2.2.1',
      ),
      getItem(
        <Link to="user-management/ViewRole">
          <SubItemLabel text="View Role" />
        </Link>,
        'sub2.2.2',
      ),
    ]),
    getItem(
      <Link to="/user-management/Permissions">Permissions</Link>,
      'sub2.3',
      <RiShieldKeyholeFill />,
    ),
  ]),
];

const SideBarComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SideBar
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      width={255}
    >
      <div className="logo-container">
        <div className="logo" />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </SideBar>
  );
};

export default SideBarComponent;
