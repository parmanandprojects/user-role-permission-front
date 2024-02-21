import {
  Box,
  Button,
  Checkbox,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../Auth.css";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailIcon from "@mui/icons-material/Mail";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../../validation/Validation";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux";
import { toast } from "react-toastify";

const Login = () => {
  const [passwordView, setPasswordview] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useSelector((state) => console.log(state, 789));
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      //   remember: false,
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      dispatch(userLogin({data:values,navigate})).then((res) => {
        if (res?.payload?.data?.status == 200) {
          console.log(res.payload.data.user.token, 456);
          // toast.success(res?.payload?.data?.message);
          // let user = JSON.stringify(res?.payload?.data?.user); // we make json stringify bcz is server response user json so make string user detail
          localStorage.setItem("loginToken", res?.payload?.data?.user.token);
          navigate("admin/dashboard");
        }
      });
    },
  });
  const handlepasswordView = () => {
    setPasswordview(!passwordView);
  };
  return (
    <>
      <Box className="first-div-form">
        <Box className="middle-div-form">
          <Box className="form-tab-bar">
            <Box className="form-heading">
              <Button>LOGIN</Button>
            </Box>
            <Box className="form-heading">
              <Button>SIGNUP</Button>
            </Box>
          </Box>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              className="form-input"
              fullWidth
              name="email"
              type="text"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="form-input"
              fullWidth
              name="password"
              type={passwordView ? "text" : "password"}
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {passwordView ? (
                      <RemoveRedEyeIcon onClick={handlepasswordView} />
                    ) : (
                      <VisibilityOffIcon onClick={handlepasswordView} />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Box className="forget-box">
              <Box className="checkbox-box">
                {/* <Checkbox
                  checked={formik.values.remember}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="remember"
                />
                Remember me */}
              </Box>
              <Box>
                <Link to="/forget">Forget password</Link>
              </Box>
            </Box>
            <Box className="btn-submit">
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
            <p>Dont`t have an account?Register</p>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
