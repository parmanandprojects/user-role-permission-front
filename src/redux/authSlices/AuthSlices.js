import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { userLogin } from "..";
import { toast } from "react-toastify";

const AuthSlices = createSlice({
  name: "authSlice",
  initialState: { loading: false, token: "", user:null },
  reducers: {
    userLogout(state,action){
      localStorage.removeItem("loginToken");
      state.token="";
      state.user="";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      console.log(action,78)
      toast.success(action?.payload?.data?.message)
      state.token = action?.payload?.data?.user?.token;
      state.user = action?.payload?.data?.user;
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      console.log(action)
      toast.error(action?.payload?.message)
     
    })
  },
});

export default AuthSlices.reducer;
export const {  userLogout } = AuthSlices.actions
