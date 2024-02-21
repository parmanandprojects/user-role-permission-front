import React from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@emotion/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = ({handleDrawerClose,open}) => {
const {rolePermission}= useSelector((state)=>state?.Auth.user);
console.log(rolePermission?.role_name,"rolePermission")

const theme = useTheme();
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
  return (
    <>
     <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {rolePermission?.role_name=="admin"? <Link to="/admin/dashboard/role-permission-list"><ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Role Permission List"} />
              </ListItemButton>
            </ListItem></Link>  :""}    

     {rolePermission?.role_name=="warden" || rolePermission?.role_name=="admin"?
      <Link to="/admin/dashboard/warden">
      <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"cleaning Management"} />
              </ListItemButton>
            </ListItem>
       </Link>  
            :""}      
        </List>
 {rolePermission?.role_name== "HR-officer"||rolePermission?.role_name=="admin"||rolePermission?.role_name=="sub-admin"?
        <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Office-Management-Programm"} />
              </ListItemButton>
            </ListItem>
                 :""} 

            {rolePermission?.role_name=="HR-officer"||rolePermission?.role_name=="sub-admin"||rolePermission?.role_name=="admin"?  <Link to="/admin/dashboard/attendance"><ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Attendance"} />
              </ListItemButton>
            </ListItem></Link> :""}

            {rolePermission?.role_name=="HR-officer"||rolePermission?.role_name=="sub-admin"||rolePermission?.role_name=="admin"?  <Link to="/admin/dashboard/user-list"><ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"User List"} />
              </ListItemButton>
            </ListItem></Link> :""}


            {rolePermission?.role_name=="tpm"||rolePermission?.role_name=="sub-admin"||rolePermission?.role_name=="admin"?  <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Task"} />
              </ListItemButton>
            </ListItem> :""}
        <Divider />
        {/* <List>
          {['All mail'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  )
}

export default Sidebar