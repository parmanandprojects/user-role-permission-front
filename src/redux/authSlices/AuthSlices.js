import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { userLogin } from "..";

const AuthSlices = createSlice({
  name: "authSlice",
  initialState: { loading: false, token: "", data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action?.payload?.data?.user?.token;
    //   console.log(action.payload.data.user.token, "action");
    });
  },
});

export default AuthSlices.reducer;
