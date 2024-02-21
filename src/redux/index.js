import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../config/Api";
import { dataService } from "../config/DataService";
import { toast } from "react-toastify";

//Auth--
export const userLogin = createAsyncThunk(
  "userLogin/authSlice",
  async ({data,navigate}, { rejectWithValue }) => {
    console.log(data, "authSlice/loginData");
    try {
      const add_rolePermission = await dataService.post(API.LOGIN, data);
      if(addRolePermission?.data?.status==200){
        navigate("admin/dashboard");
      }
      return add_rolePermission;
    } catch (err) {
      // toast.error(err.response.data.message);
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const getAllRolePermission = createAsyncThunk(
  "getAllRolePermission",
  async (_, { rejectWithValue }) => {
    try {
      const rolePermission_response = await dataService.get(
        API.GET_ROLES_PERMISSION
      );
      return rolePermission_response;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const allUser_response = await dataService.get(API.GET_ALL_USERS);
      console.log("allUser_response", allUser_response);
      return allUser_response;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

// export const getAllRolePermission = createAsyncThunk(
//   "getAllRolePermission",
//   async (_, { rejectWithValue }) => {
//     try {
//       const allUser_response = await dataService.get(API.GET_ALL_ROLEPERMISSION);
//       console.log("allUser_response", allUser_response);
//       if (allUser_response?.status === 200) {
//         return allUser_response;
//       }
//     } catch (err) {
//       rejectWithValue(err);
//     }
//   }
// );

export const getSingleUsers = createAsyncThunk(
  "getSingleUsers/userSlice",
  async (id, { rejectWithValue }) => {
    try {
      const User_response = await dataService.get(
        `${API.GET_SINGLE_USER}/${id}`
      );
      return User_response;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const addRolePermission = createAsyncThunk(
  "addRolePermission/roleReducer",
  async (data, { rejectWithValue }) => {
    try {
      const add_rolePermission = await dataService.post(
        API.ADD_ROLE_PERMISSION,
        data
      );
     

      return add_rolePermission;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const addUser = createAsyncThunk(
  "addUser/userSlice",
  async ({ data, navigate }, { rejectWithValue }) => {
    try {
      const add_user = await dataService.post(API.ADD_USER, data);

      if (add_user?.data?.status == 201) {
        navigate("/admin/dashboard/user-list");
      }
      return add_user;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser/userSlice",
  async ({ id, navigate }, { rejectWithValue }) => {
    try {
      const delete_user = await dataService.delete(`${API.DELETE_USER}/${id}`);
      return delete_user;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const deleteRolePermission = createAsyncThunk(
  "deleteRolePermission",
  async (id, { rejectWithValue }) => {
    console.log(id, "deleteRolePermissionID");
    try {
      const delete_role_permission = await dataService.delete(
        `${API.DELETE_ROLE_PERMISSION}/${id}`
      );
      console.log("delete_ROLE_PERMISSION", delete_role_permission);
      if (delete_role_permission.status === 200) {
        return delete_role_permission;
      }
    } catch (err) {
      console.log(err.message, "err");
      rejectWithValue(err);
    }
  }
);

export const UpdateUser = createAsyncThunk(
  "UpdateUser",
  async ({ data, id }, { rejectWithValue }) => {
    // debugger;
    console.log(JSON.stringify(data, "IDupdateCommingData"));
    try {
      // let id=data?.id;
      const update_user = await dataService.post(
        `${API.UPDATE_USER}/${id}`,
        data
      );
      return update_user;
    } catch (err) {
      console.log(err?.message, "err");
      rejectWithValue(err);
    }
  }
);
