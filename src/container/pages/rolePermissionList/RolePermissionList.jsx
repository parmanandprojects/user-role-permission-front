// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { getAllRolePermission } from "../../../redux";
// import { toast } from "react-toastify";
// import "./RolePermissionList.css";
// import { Box, Button } from "@mui/material";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Checkbox from '@mui/material/Checkbox';

// const RolePermissionList = () => {
//   const [roles, setRoles] = useState([]);
//   const [updatedPermissions, setUpdatedPermissions] = useState({});
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllRolePermission())
//       .then((res) => {
//         if (res.payload.data.status === 200) {
//           toast.success(res?.payload?.data?.message);
//           setRoles(res?.payload?.data?.rolesPermission);
//           initializeUpdatedPermissions(res?.payload?.data?.rolesPermission);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const initializeUpdatedPermissions = (rolesPermission) => {
//     const initialPermissions = {};
//     rolesPermission.forEach((role, index) => {
//       initialPermissions[index] = { ...role.permission };
//     });
//     setUpdatedPermissions(initialPermissions);
//   };

//   const handleCheckboxChange = (event, roleIndex, permissionType) => {
//     const updatedPermission = {
//       ...updatedPermissions,
//       [roleIndex]: {
//         ...updatedPermissions[roleIndex],
//         [permissionType]: event.target.checked
//       }
//     };
//     setUpdatedPermissions(updatedPermission);
//   };

//   const handleSubmit = () => {
//     const formattedPermissions = roles.map((role, index) => ({
//       permission: { ...updatedPermissions[index] },
//       _id: role._id,
//       role_Type: role.role_Type
//     }));
//     console.log(formattedPermissions);
//   };

//   return (
//     <>
//       <Box className="Role-Div">
//         <Box className="add-role-box">
//         <Button variant="contained">Add Module</Button>
//         </Box>

//         <Box className="Role-Table">
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Module Name</TableCell>
//                   <TableCell align="right">ALL</TableCell>
//                   <TableCell align="right">CREATE</TableCell>
//                   <TableCell align="right">UPDATE</TableCell>
//                   <TableCell align="right">DELETE</TableCell>
//                   <TableCell align="right">VIEW</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {roles.map((role, index) => (
//                   <TableRow key={role._id}>
//                     <TableCell>{role.role_Type}</TableCell>
//                     <TableCell align="right">
//                       <Checkbox
//                         checked={updatedPermissions[index]?.all || false}
//                         onChange={(e) => handleCheckboxChange(e, index, "all")}
//                       />
//                     </TableCell>
//                     <TableCell align="right">
//                       <Checkbox
//                         checked={updatedPermissions[index]?.create || false}
//                         onChange={(e) => handleCheckboxChange(e, index, "create")}
//                       />
//                     </TableCell>
//                     <TableCell align="right">
//                       <Checkbox
//                         checked={updatedPermissions[index]?.update || false}
//                         onChange={(e) => handleCheckboxChange(e, index, "update")}
//                       />
//                     </TableCell>
//                     <TableCell align="right">
//                       <Checkbox
//                         checked={updatedPermissions[index]?.delete || false}
//                         onChange={(e) => handleCheckboxChange(e, index, "delete")}
//                       />
//                     </TableCell>
//                     <TableCell align="right">
//                       <Checkbox
//                         checked={updatedPermissions[index]?.view || false}
//                         onChange={(e) => handleCheckboxChange(e, index, "view")}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// };

// export default RolePermissionList;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRolePermission, getAllRolePermission } from "../../../redux";
import { toast } from "react-toastify";
import "./RolePermissionList.css";
import { Box, Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const RolePermissionList = () => {
  let dispatch=useDispatch()
  const formik = useFormik({
    initialValues: {
      role_name: "",
      attendance: {
        module_access:false,
        all: false,
        create: false,
        update: false,
        delete: false,
        view: false,
      },
      user: {
        module_access:false,
        all: false,
        create: false,
        update: false,
        delete: false,
        view: false,
      },
      task: {
        module_access:false,
        all: false,
        create: false,
        update: false,
        delete: false,
        view: false,
      },
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(addRolePermission(values)).then((res)=>{
        if(res?.payload?.status==201){
          console.log(res?.payload?.data?.message,"ress")
          toast.success(res?.payload?.data?.message)
        }
      })
      
    },
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    formik.setFieldValue(name, checked);
  };
  return (
    <>
      <Box className="Role-Div">
        <form onSubmit={formik.handleSubmit}>
          <Box className="add-role-box">
            <TextField
              name="role_name"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.role_name}
              onBlur={formik.handleBlur}
              error={
                formik.touched.role_name && Boolean(formik.errors.role_name)
              }
              helperText={formik.touched.role_name && formik.errors.role_name}
              placeholder="Enter Role Name"
            />
          </Box>

          <Box className="Role-Table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {/* {roles.map((role, index) => ( */}
                  <TableRow>

                    {/* Attedence */}
                    <TableCell>{"attendance"}</TableCell>

                    <TableCell align="right">
                      {"module_access"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.attendance.module_access}
                            onChange={handleCheckboxChange}
                            name="attendance.module_access"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"All"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.attendance.all}
                            onChange={handleCheckboxChange}
                            name="attendance.all"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Create"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.attendance.create}
                            onChange={handleCheckboxChange}
                            name="attendance.create"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Update"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.attendance.update}
                            onChange={handleCheckboxChange}
                            name="attendance.update"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Delete"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.attendance.delete}
                            onChange={handleCheckboxChange}
                            name="attendance.delete"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"View"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.attendance.view}
                            onChange={handleCheckboxChange}
                            name="attendance.view"
                          />
                        }
                      />
                    </TableCell>
                  </TableRow>

                  {/* USER */}

                  <TableRow>
                    <TableCell>{"User"}</TableCell>

                    <TableCell align="right">
                      {"module_access"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.user.module_access}
                            onChange={handleCheckboxChange}
                            name="user.module_access"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"All"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.user.all}
                            onChange={handleCheckboxChange}
                            name="user.all"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Create"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.user.create}
                            onChange={handleCheckboxChange}
                            name="user.create"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Update"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.user.update}
                            onChange={handleCheckboxChange}
                            name="user.update"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Delete"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.user.delete}
                            onChange={handleCheckboxChange}
                            name="user.delete"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"View"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.user.view}
                            onChange={handleCheckboxChange}
                            name="user.view"
                          />
                        }
                      />
                    </TableCell>
                  </TableRow>

                  {/* Task */}

                  <TableRow>
                    <TableCell>{"Task"}</TableCell>

                    <TableCell align="right">
                      {"module_access"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.task.module_access}
                            onChange={handleCheckboxChange}
                            name="task.module_access"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"All"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.task.all}
                            onChange={handleCheckboxChange}
                            name="task.all"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Create"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.task.create}
                            onChange={handleCheckboxChange}
                            name="task.create"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Update"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.task.update}
                            onChange={handleCheckboxChange}
                            name="task.update"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"Delete"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.task.delete}
                            onChange={handleCheckboxChange}
                            name="task.delete"
                          />
                        }
                      />
                    </TableCell>

                    <TableCell align="right">
                      {"View"}&nbsp;&nbsp;
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.task.view}
                            onChange={handleCheckboxChange}
                            name="task.view"
                          />
                        }
                      />
                    </TableCell>
                  </TableRow>
                  {/* ))} */}



                </TableBody>
              </Table>
            </TableContainer>
            <Box className="submit-btn-div">
              <Button
                fullWidth
                sx={{ marginTop: "10px" }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default RolePermissionList;
