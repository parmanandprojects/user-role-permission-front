import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
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
  Fade,
  FormControl,
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [viewData, setViewData] = useState({});
  const [ profilePic,setProfilePic]=useState('')

  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUsers()).then((res) => {
      if (res?.payload?.data?.status == 200) {
        setUserList(res?.payload?.data?.users);
      }
    });
  }, []);
  //Model func--
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleProfilePicOpen = () => setProfileOpen(true);
  const handleProfilePicClose = () => setProfileOpen(false);
  const handleDelete = (id) => {
    console.log(id, "oo");
    dispatch(deleteUser({id,navigate})).then((res) => {
      console.error(res,4)
      if (res?.payload?.data?.status == 200) {
        // toast.success(res?.payload?.data?.message);
        dispatch(getAllUsers()).then((res) => {
          if (res?.payload?.data?.status == 200) {
            setUserList(res?.payload?.data?.users);
          }
        });
      }
    });
  };

  const handleView = (user) => {
    handleOpen();
    setViewData(user);
    console.log(viewData, 456);
  };
  const handleEdit = (user) => {
    console.log(user);
    // dispatch(getSingleUsers(id)).then((res)=>console.log(res,789))
    navigate("/admin/dashboard/add-user", { state: user });
  };
  const handleViewProfilePic=(pic)=>{
    handleProfilePicOpen();
    setProfilePic(pic)

  }
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
            onClick={() => navigate("/admin/dashboard/add-user")}
            type="button"
            className="add-btnaa"
            variant="contained"
          >
            <ControlPointIcon />
            &nbsp; Add User
          </Button>
        </Box>

        <Box className="Role-Table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="right">image</TableCell>
                  <TableCell align="right">USERNAME</TableCell>
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">MOBILE</TableCell>
                  <TableCell align="right">ROLE TYPE</TableCell>
                  <TableCell align="right">ACTION</TableCell>

                  {/* <TableCell align="right">DELETE</TableCell>
                  <TableCell align="right">VIEW</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {console.log(userList, 789)}
                {userList?.map((user, index) => (
                  <TableRow key={user?._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="right">
                      <img onClick={()=>handleViewProfilePic(user?.profilePic)}
                        className="profile-image"
                        src={`${imageURL}/${user?.profilePic}`}
                      />
                    </TableCell>
                    <TableCell align="right">{user?.name}</TableCell>
                    <TableCell align="right">{user?.email}</TableCell>
                    <TableCell align="right">{user?.mobile}</TableCell>
                    <TableCell align="right">
                      {user?.rolePermission?.role_name || "user"}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => handleView(user)}
                      >
                        <VisibilityIcon />
                      </Button>
                      &nbsp;&nbsp;
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(user)}
                      >
                        <EditIcon />
                      </Button>
                      &nbsp;&nbsp;
                      <Button
                        variant="contained"
                        onClick={() => handleDelete(user?._id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
         
            <Box className="user-img">
          
              <img
                src={`${imageURL}/${viewData?.profilePic}`}
                className="user-image"
                alt="user-image"
              />
            </Box>

            <Box className="model-div">
              <Box className="model-wrapper">
                <TextField
                  name="name"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={viewData.name}
                />
                <TextField
                  name="email"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={viewData.email}
                />
                <TextField
                  name="mobile"
                  value={viewData.mobile}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Role Type
                  </InputLabel>
                  <Select
                    InputProps={{
                      readOnly: true,
                    }}
                    // value={viewData?.rolePermission?.role_name || ''}
                  >
                    <MenuItem selected value={viewData?.rolePermission?._id}>
                      {viewData?.rolePermission?.role_name}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>


      {/* profole pic model */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={profileOpen}
        onClose={handleProfilePicClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={profileOpen}>
          <Box sx={style}>
          <Box className="profile">
          <img
                src={`${imageURL}/${profilePic}`}
                className="profile-image"
                alt="user-image"
              />
          </Box>
        
            </Box>
          
        </Fade>
      </Modal>
    </>
  );
};

export default UserList;
