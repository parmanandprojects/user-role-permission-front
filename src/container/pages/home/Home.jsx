import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate=useNavigate();
    const handleClick=()=>{
        // alert("clickedd again")
        navigate("/admin/dashboard")
        
    }
  return (
    <><Button onClick={handleClick}>Go To Dashaboard</Button></>
  )
}

export default Home