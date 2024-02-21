// import React from 'react'

// const RolePermissionList = () => {
//   return (
//     <div>RolePermissionList</div>
//   )
// }

// export default RolePermissionList

import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRolePermission,
  deleteUser,
  getAllRolePermission,
  getAllUsers,
  getSingleUsers,
} from "../../../redux";
import { toast } from "react-toastify";
// import "./RolePermissionList.css";
import {
  Box,
  Button,
  Checkbox,
  Fade,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import { Link, useNavigate } from "react-router-dom";
import { imageURL } from "../../../config/DataService";

const RolePermissionList = () => {
  const [rolePermissionList, setRolePermissionList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [viewData, setViewData] = useState({});
  const [profilePic, setProfilePic] = useState("");
  const [allpermission, setAllPermission] = useState([]);

  //get state from redux-
  const {rolePermission}= useSelector((state)=>state?.Auth.user);
  console.log(rolePermission?.role_name,"rolePermission")

  //create instance 
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllRolePermission()).then((res) => {
      console.log(res.payload.data, "dt");
      if (res?.payload?.data?.status == 200) {
        // toast.success(res.payload.data.message)
        setRolePermissionList(res.payload.data.roles);
      }
    });
  }, []);

  //Model func--
  const handleOpen = (permission) => {
    const permissionsArray = Object?.keys(permission)?.map((moduleName) => ({
      name: moduleName,
      ...permission[moduleName],
    }));
    setAllPermission(permissionsArray);
    setOpen(true);
  };

  //model func-
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    console.log(id, "oo");
    dispatch(deleteRolePermission(id)).then((res) => {
      console.log("ress", res);
      if (res?.payload?.data?.status == 200) {
        toast.success(res?.payload?.data?.message);
        dispatch(getAllRolePermission()).then((res) => {
          console.log(res.payload.data, "dt");
          if (res?.payload?.data?.status == 200) {
            setRolePermissionList(res.payload.data.roles);
          }
        });
      }
    });
  };

  const handleView = (user) => {
    handleOpen(user?.permission);
    setViewData(user);
    console.log(viewData, 456);
  };
  const handleEdit = (user) => {
    console.log(user);
    // dispatch(getSingleUsers(id)).then((res)=>console.log(res,789))
    navigate("/admin/dashboard/add-user", { state: user });
  };
  const handleViewProfilePic = (pic) => {
    // handleProfilePicOpen();
    setProfilePic(pic);
  };
  return (
    <>
      <Box className="Role-Div">
        <Box className="add-role-box">
          <TextField
            sx={{ width: "50%" }}
            placeholder="Search"
            type="search"
            size="small"
          />
          <Button
            onClick={() => navigate("/admin/dashboard/add-role-permission")}
            type="button"
            className="add-btnaa"
            variant="contained"
          >
            <ControlPointIcon />
            &nbsp; Add Role Permission
          </Button>
        </Box>

        <Box className="Role-Table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="center">ROLE NAME</TableCell>
                  <TableCell align="center">VIEW PERMISSION</TableCell>
                  {/* <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">MOBILE</TableCell>
                  <TableCell align="right">ROLE TYPE</TableCell> */}
                  <TableCell align="center">ACTION</TableCell>

                  {/* <TableCell align="right">DELETE</TableCell>
                  <TableCell align="right">VIEW</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {console.log(rolePermissionList, 789)}
                {rolePermissionList?.map((user, index) => (
                  <TableRow key={user?._id}>
                    <TableCell>{index + 1}</TableCell>
                    {/* <TableCell align="right">
                      <img onClick={()=>handleViewProfilePic(user?.profilePic)}
                        className="profile-image"
                        src={`${imageURL}/${user?.profilePic}`}
                      />
                    </TableCell> */}
                    <TableCell align="center">{user?.role_name}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <Button
                        variant="contained"
                        onClick={() => handleView(user)}
                      >
                        <VisibilityIcon />
                      </Button>
                    </TableCell>
                    {/* <TableCell align="right">{user?.mobile}</TableCell>
                    <TableCell align="right">
                      {user?.rolePermission?.role_name || "user"}
                    </TableCell> */}
                    <TableCell align="center">
                      &nbsp;&nbsp;
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(user)}
                      >
                        <EditIcon />
                      </Button>
                      &nbsp;&nbsp;
                      {rolePermission?.role_name=="sub-admin"? "" :  <Button
                        variant="contained"
                        onClick={() => handleDelete(user?._id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </Button> }     
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* profole pic model */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="model-wrapper-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Permission for this User
          </Typography>
          <Box className="permission-view-box">
            {/* {"attendence"}
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  // onChange={handleCheckboxChange}
                  name="attendance.module_access"
                />
              }
            /> */}

            {allpermission &&
              allpermission?.map((permission) => {
                console.log(321, permission);
                return (
                  <>
                    <Box>
                      {`${permission.name}->`}
                      {/* <FormControlLabel
                        control={
                          <Checkbox
                            checked={true}
                            // onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      /> */}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"all"}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.all}
                            // onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      />
                      {"Create"}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.create}
                            // onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      />
                      {"Update"}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.update}
                            // onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      />
                      {"Delete"}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.delete}
                            // onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      />
                      {"view"}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.delete}
                            // onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      />
                    </Box>
                  </>
                );
              })}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default RolePermissionList;
