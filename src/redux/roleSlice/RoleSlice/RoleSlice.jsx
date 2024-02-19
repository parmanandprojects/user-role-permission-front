import { createSlice } from "@reduxjs/toolkit";
import { addRolePermission, getAllRolePermission } from "../..";

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
      console.log(action, 123456);
    });
    builder.addCase(addRolePermission.rejected, (state, action) => {
      console.log(action, "rejected");
    });
  },
});

export default RoleSlice.reducer;
