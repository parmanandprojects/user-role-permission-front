import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { userLogin } from "..";

const AuthSlices = createSlice({
  name: "authSlice",
  initialState: { loading: false, token: "", user:null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      console.log(action,78)
      state.token = action?.payload?.data?.user?.token;
      state.user = action?.payload?.data?.user;
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      console.log(action)
      // state.token = action?.payload?.data?.user?.token;
      // state.user = action?.payload?.data?.user;
    })
  },
});

export default AuthSlices.reducer;
