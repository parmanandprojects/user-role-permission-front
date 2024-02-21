import { createSlice } from "@reduxjs/toolkit";
import { addRolePermission, getAllRolePermission } from "../..";
import { toast } from "react-toastify";

const RoleSlice = createSlice({
  name: "roleReducer",
  initialState: { loading: "false", user: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRolePermission.pending, (state, action) => {
      console.log(action, "action");
    });
    builder.addCase(getAllRolePermission.fulfilled, (state, action) => {
      console.log(action, 123456);
    });
    builder.addCase(getAllRolePermission.rejected, (state, action) => {
      console.log(action, "rejected");
    });

    //add-rolePermission------

    builder.addCase(addRolePermission.pending, (state, action) => {
      console.log(action, "action");
    });
    builder.addCase(addRolePermission.fulfilled, (state, action) => {
      toast.success(action?.payload?.data?.message)
    });
    builder.addCase(addRolePermission.rejected, (state, action) => {
      toast.error(action?.payload?.message)
    });
  },
});

export default RoleSlice.reducer;
