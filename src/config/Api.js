let ADMIN="admin";
let USER="user";
export const API={
    LOGIN:`${USER}/login-user`,
    GET_ROLES_PERMISSION:`${ADMIN}/get-all-role-permission`,
    GET_ALL_USERS:`${USER}/get-user`,
    GET_SINGLE_USER:`${USER}/get-single-user`,
    ADD_ROLE_PERMISSION:`${ADMIN}/add-roles-permission`,
    ADD_USER:`${USER}/add-user`,
    UPDATE_USER:`${USER}/update-user`,
    DELETE_USER:`${USER}/delete-user`,


}