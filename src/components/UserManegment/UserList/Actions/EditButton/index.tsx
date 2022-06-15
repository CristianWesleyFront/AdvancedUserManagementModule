import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Item } from '../styles';

export interface IEditButton {
  id: number;
  updateFunc?: (id: number) => void;
}

const EditButton: React.FC<IEditButton> = ({ id }) => {
  return (
    <Link to={`/Edit/${id}`}>
      <Item shape="square" icon={<EditOutlined />} disabled={false} />
    </Link>
  );
};

export default EditButton;
