import React from 'react';
import { Table } from 'antd';
import Topbar from './topbar';
import { TableContainer } from './styles';
import { columns, data } from './columns';

const UserList: React.FC = () => {
  return (
    <TableContainer>
      <Table title={Topbar} columns={columns} dataSource={data} />
    </TableContainer>
  );
};

export default UserList;
