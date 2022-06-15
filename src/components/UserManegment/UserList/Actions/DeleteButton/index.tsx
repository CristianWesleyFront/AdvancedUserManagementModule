import React from 'react';
import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { Item } from '../styles';

export interface IDeleteButton {
  id?: number;
  removeFunc?: (id: number) => void;
}

const { confirm } = Modal;

const DeleteButton: React.FC<IDeleteButton> = ({
  id = 0,
  removeFunc = id => console.log(id),
}) => {
  function confirmModal() {
    confirm({
      title: 'Tem certeza que deseja deletar esse item ?',
      icon: <DeleteOutlined />,
      content: 'Se confirmar o modal esse item sera deletado permanentemente !',
      okText: 'Deletar',
      okType: 'danger',
      cancelText: 'Voltar',
      onOk() {
        removeFunc(id);
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  return (
    <Item shape="square" icon={<DeleteOutlined />} onClick={confirmModal} />
  );
};

export default DeleteButton;
