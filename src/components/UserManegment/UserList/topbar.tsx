import React from 'react';
import { FilterFilled, ExportOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Button, Space } from 'antd';
import { TableHeader } from './styles';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const TopBarUserList: React.FC = () => {
  return (
    <TableHeader>
      <Search
        placeholder="Search user"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <div className="Actions">
        <Space align="center">
          <Button icon={<FilterFilled />}>Filter</Button>
          <Button icon={<ExportOutlined />}>Export</Button>
          <Button type="primary" icon={<PlusOutlined />}>
            Add User
          </Button>
        </Space>
      </div>
    </TableHeader>
  );
};

export default TopBarUserList;
