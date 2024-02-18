import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/admin/dashboard/Dashboard";
import RolePermissionList from "../container/pages/rolePermissionList/RolePermissionList";
import AddUser from "../container/pages/user/AddUser";
import UserList from "../container/pages/user/UserList";
import Login from "../container/auth/login/Login";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="admin/dashboard" element={<Dashboard />}>
          <Route path="role-list" element={<RolePermissionList />} />
          <Route path="user-list" element={<UserList/>} />
          <Route path="add-user" element={<AddUser />} />


        </Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
