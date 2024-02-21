import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/admin/dashboard/Dashboard";
import AddUser from "../container/pages/user/AddUser";
import UserList from "../container/pages/user/UserList";
import Login from "../container/auth/login/Login";
import AddRolePermission from "../container/pages/rolePermissionList/AddRolePermission";
import RolePermissionList from "../container/pages/rolePermissionList/RolePermissionList";
import Attendance from "../container/pages/attendance/Attendance";
import Warden from "../container/pages/warden-work/Warden";
import ProtectedRoute from "./ProtectedRoute";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>   
        <Route path="admin/dashboard" element={<Dashboard />}>
          <Route path="add-role-permission" element={<AddRolePermission />} />
          <Route path="role-permission-list" element={<RolePermissionList />} />
          <Route path="user-list" element={<UserList/>} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="warden" element={<Warden />} />
        </Route>
        </Route>

      </Routes>
    </>
  );
};

export default PublicRoutes;
