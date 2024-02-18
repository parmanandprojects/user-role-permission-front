import {  createSlice } from '@reduxjs/toolkit'
import { getAllRolePermission } from '../..'


// Then, handle actions in your reducers:
const RoleSlice = createSlice({
  name: 'roleReducer',
  initialState: { loading: 'false' },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRolePermission.pending, (state, action) => {
        console.log(action,"action")
    })
    builder.addCase(getAllRolePermission.fulfilled, (state, action) => {
        console.log(action,123456)
      })
  },
})

export default RoleSlice.reducer
