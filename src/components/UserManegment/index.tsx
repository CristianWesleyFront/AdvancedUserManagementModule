import React from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import UsersListWrapper from './UserList';

const UserManegment: React.FC = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path="users" element={<UsersListWrapper />} />
      </Route>
      <Route index element={<Navigate to="/user-management/users" />} />
    </Routes>
  );
};

export default UserManegment;
