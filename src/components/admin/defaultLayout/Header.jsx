import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import  "../DefaultLayout.css"
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../redux/authSlices/AuthSlices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';





const Header = ({handleDrawerOpen,open}) => {
let dispatch=  useDispatch();
let navigate=useNavigate();


const MyhandleLogout=()=>{

  dispatch(userLogout());
  toast.success("Logout successfully ")
  navigate("/")
  
}
    const drawerWidth = 240;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="header-icons">
          <Typography variant="h6" noWrap component="div">
            Admin
          </Typography>
          <Button onClick={MyhandleLogout} color={"error"} variant='contained'><LogoutIcon/></Button>

          </Box>
        
        </Toolbar>
      </AppBar>
    
    </>
  )
}

export default Header


