import React, { useEffect } from 'react'
import DataService, { dataService } from '../config/DataService';
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const isValidToken = (userToken) => {
    if (!userToken) {
      return false;
    }
  
    dataService.defaults.headers.common.auth = userToken;
    
    return true;
  };
  
  
  
const ProtectedRoute = () => {
    
    const tokenFromLocalStorage = localStorage.getItem('loginToken');
  
    return isValidToken(tokenFromLocalStorage) ? <Outlet /> : <Navigate to="/" />;
  };
  
  export default ProtectedRoute;


