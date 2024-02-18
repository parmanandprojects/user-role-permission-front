import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../config/Api";
import { dataService } from "../config/DataService";
import { toast } from "react-toastify";

//Auth--
export const userLogin = createAsyncThunk(
  "userLogin",
  async (data, { rejectWithValue }) => {
    console.log(data, "authSlice/loginData");
    try {
      const add_rolePermission = await dataService.post(API.LOGIN, data);
      // console.log("LOGIN_USER", add_rolePermission);

      return add_rolePermission;
    } catch (err) {
      toast.error(err.response.data.message);
      rejectWithValue(err);
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

      console.log("rolePermission_response", rolePermission_response);
      if (rolePermission_response?.status === 200) {
        return rolePermission_response;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const allUser_response = await dataService.get(API.GET_ALL_USERS);
      console.log("allUser_response", allUser_response);
      if (allUser_response?.status === 200) {
        return allUser_response;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getSingleUsers = createAsyncThunk(
  "getSingleUsers",
  async (id, { rejectWithValue }) => {
    try {
      const User_response = await dataService.get(
        `${API.GET_SINGLE_USER}/${id}`
      );
      console.log("User_response", User_response);
      if (User_response?.status === 200) {
        return User_response;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const addRolePermission = createAsyncThunk(
  "addRolePermission",
  async (data, { rejectWithValue }) => {
    console.log(data, "commingData");
    try {
      const add_rolePermission = await dataService.post(
        API.ADD_ROLE_PERMISSION,
        data
      );
      console.log("add_rolePermission", add_rolePermission);
      if (add_rolePermission.status === 201) {
        return add_rolePermission;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const addUser = createAsyncThunk(
  "addUser",
  async (data, { rejectWithValue }) => {
    console.log(data, "commingData");
    try {
      const add_user = await dataService.post(API.ADD_USER, data);
      console.log("add_rolePermission", add_user);
      if (add_user.status === 201) {
        return add_user;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    console.log(id, "commingData");
    try {
      const delete_user = await dataService.delete(`${API.DELETE_USER}/${id}`);
      console.log("delete_USER", delete_user);
      if (delete_user.status === 200) {
        return delete_user;
      }
    } catch (err) {
      console.log(err.message, "err");
      rejectWithValue(err);
    }
  }
);

export const UpdateUser = createAsyncThunk(
  "UpdateUser",
  async (data, { rejectWithValue }) => {
    debugger;
    console.log(data, "updateCommingData");
    try {
      // let id=data?.id;
      const update_user = await dataService.put(
        `${API.UPDATE_USER}/${"sdfsdf"}`,
        data
      );
      console.log("update_USER", update_user);
      if (update_user.status === 200) {
        return update_user;
      }
    } catch (err) {
      console.log(err.message, "err");
      rejectWithValue(err);
    }
  }
);
