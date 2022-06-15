import { Space, Tag, List, Avatar } from 'antd';
import { formatDistanceToNow } from 'date-fns';
import type { ColumnsType } from 'antd/lib/table';
import { UserListUser } from './styles';
import Actions from './Actions';
import fakeUser from '../../../assets/300-1.jpg';

interface DataType {
  key: string;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  twoStep: string;
  joinedDate: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'USER',
    dataIndex: 'name',
    key: 'name',
    width: '300px',
    render: (value: string, record: DataType) => {
      return (
        <UserListUser>
          <List.Item.Meta
            avatar={<Avatar src={fakeUser} />}
            title={<a href="https://ant.design">{value}</a>}
            description={record.email}
          />
        </UserListUser>
      );
    },
  },
  {
    title: 'ROLE',
    key: 'role',
    dataIndex: 'role',
    width: '170px',
  },
  {
    title: 'LAST LOGIN',
    key: 'lastLogin',
    dataIndex: 'lastLogin',
    width: '170px',
  },
  {
    title: 'TWO-STEP',
    key: 'twoStep',
    dataIndex: 'twoStep',
    width: '170px',
    render: value => <Tag color="success">{value}</Tag>,
  },
  {
    title: 'JOINED DATE',
    key: 'joinedDate',
    dataIndex: 'joinedDate',
    render: value => <span>{`${value}`}</span>,
  },
  {
    title: 'ACTIONS',
    key: 'action',
    width: '140px',
    render: (_, record) => <Actions />,
  },
];

export const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
  {
    key: '1',
    name: 'John Brown',
    email: 'JohnBrown@email.com',
    role: 'Administrador',
    lastLogin: formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: false }),
    twoStep: 'Enabled',
    joinedDate: new Date().toDateString(),
  },
];
