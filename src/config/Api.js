let ADMIN="admin";
let USER="user";
export const API={
    LOGIN:`${USER}/login-user`,
    GET_ROLES_PERMISSION:`${ADMIN}/get-all-role-permission`,
    GET_ALL_USERS:`${USER}/get-user`,
    GET_SINGLE_USER:`${USER}/get-single-user`,
    ADD_ROLE_PERMISSION:`${ADMIN}/add-role-permission`,
    ADD_USER:`${USER}/add-user`,
    UPDATE_USER:`${USER}/update-user`,
    DELETE_USER:`${USER}/delete-user`,
    GET_ALL_ROLEPERMISSION:`${ADMIN}/get-all-role-permission`,
    DELETE_ROLE_PERMISSION:`${ADMIN}/delete-role-permission`


}