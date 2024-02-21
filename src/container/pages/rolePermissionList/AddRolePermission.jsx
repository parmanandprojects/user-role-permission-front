import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRolePermission, getAllRolePermission } from "../../../redux";
import { toast } from "react-toastify";
import "./RolePermission.css";
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
import { useNavigate } from "react-router-dom";

const AddRolePermission = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      role_name: "",
      attendance: {
        module_access: false,
        all: false,
        create: false,
        update: false,
        delete: false,
        view: false,
      },
      user: {
        module_access: false,
        all: false,
        create: false,
        update: false,
        delete: false,
        view: false,
      },
      task: {
        module_access: false,
        all: false,
        create: false,
        update: false,
        delete: false,
        view: false,
      },
    },
    onSubmit: (values) => {
      console.log(values);
      const { role_name, ...permission } = values;
      dispatch(addRolePermission({ role_name, permission, navigate })).then(
        (res) => {
          if (res?.payload?.status == 201) {
            navigate("/admin/dashboard/role-permission-list");
          }
        }
      );
    },
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    formik.setFieldValue(name, checked);
  };

  const handleCheckboxChangeall = (event) => {
    const { name, checked } = event.target;
    const [moduleName, permissionType] = name.split(".");

    if (permissionType === "all") {
      // If "All" checkbox is clicked, set all permissions in the same row to the same value
      const updatedPermissions = { ...formik.values[moduleName] };
      for (const key in updatedPermissions) {
        if (key !== "module_access") {
          updatedPermissions[key] = checked;
        }
      }
      formik.setValues({
        ...formik.values,
        [moduleName]: updatedPermissions,
      });
    } else {
      // If any other checkbox is clicked, update its value
      formik.setFieldValue(name, checked);
    }
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
                            onClick={(e) => handleCheckboxChangeall(e)}
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
                            onClick={(e) => handleCheckboxChangeall(e)}
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
                            onClick={(e) => handleCheckboxChangeall(e)}
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

export default AddRolePermission;
