import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const Attendance = () => {
    const {rolePermission}= useSelector((state)=>state?.Auth.user);
console.log(rolePermission?.role_name,"rolePermission")
  return (
    <>
    <h1>attendance component</h1>
    <Button variant='contained'  >Attendance Edit</Button>&nbsp;&nbsp;&nbsp;
   {rolePermission?.role_name=="HR-officer"? ""  :<Button variant='contained'>Delete</Button>} 
    <Button variant='contained'>Attendance view</Button>
    </>
  )
}

export default Attendance