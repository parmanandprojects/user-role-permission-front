import { combineReducers } from 'redux'
import RoleSlice from './roleSlice/RoleSlice/RoleSlice'
import AuthSlices from './authSlices/AuthSlices'

export const rootReducer = combineReducers({
    Role: RoleSlice,
    Auth:AuthSlices
})