import { combineReducers } from 'redux'
import RoleSlice from './roleSlice/RoleSlice/RoleSlice'
import AuthSlices from './authSlices/AuthSlices'
import UserSlices from './userSlice/UserSlices'

export const rootReducer = combineReducers({
    Role: RoleSlice,
    Auth:AuthSlices,
    user:UserSlices
})