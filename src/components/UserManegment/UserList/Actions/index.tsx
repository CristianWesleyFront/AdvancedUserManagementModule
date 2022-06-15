import React from 'react';
import { Space } from 'antd';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export interface IActions {
  id?: number;
  handleRemove?: (id: number) => Promise<void>;
}

const Actions: React.FC<IActions> = ({ id, handleRemove }) => {
  return (
    <Space align="center" size="middle">
      <EditButton id={id || 0} />
      <DeleteButton id={id} removeFunc={handleRemove} />
    </Space>
  );
};

export default Actions;
