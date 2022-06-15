import React from 'react';
import { Table } from 'antd';
import Topbar from './topbar';
import { TableContainer } from './styles';
import { columns, data } from './columns';

const UserList: React.FC = () => {
  return (
    <TableContainer>
      <Table
        title={Topbar}
        columns={columns}
        dataSource={data}
        pagination={{
          size: 'small',
          total: data?.length,
          showTotal: (total, range) =>
            `${range[0]} - ${range[1]} de ${total} itens`,
        }}
      />
    </TableContainer>
  );
};

export default UserList;
