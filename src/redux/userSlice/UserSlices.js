import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { addUser, deleteUser, getSingleUsers } from "..";
import { toast } from "react-toastify";

const UserSlice = createSlice({
  name: "userSlice",
  initialState: { loading: false },
  reducers: {},
  extraReducers: (builder) => {

    //add-user---
    builder.addCase(addUser.pending, (state, action) => {
        console.log(action,"pending")
     
      })
    builder.addCase(addUser.fulfilled, (state, action) => {
        toast.success(action?.payload?.data?.message)
   
    })
    builder.addCase(addUser.rejected, (state, action) => {
        toast.error(action?.payload?.message)
    
    })

    //delete-user---
    builder.addCase(deleteUser.pending, (state, action) => {
        console.log(action,"pending")
     
      })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      toast.success(action?.payload?.data?.message)
   
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
        toast.error(action?.payload?.message)
    
    })
    //get-single-user---
    builder.addCase(getSingleUsers.pending, (state, action) => {
        console.log(action,"pending")
     
      })
    builder.addCase(getSingleUsers.fulfilled, (state, action) => {
      toast.success(action?.payload?.data?.message)
   
    })
    builder.addCase(getSingleUsers.rejected, (state, action) => {
        toast.error(action?.payload?.message)
    
    })
  },
});

export default UserSlice.reducer;

