import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginSelector } from '../recoil/selector';

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate 
      to={'/login'} 
      replace={true} 
      state={{ redirectedFrom: currentLocation }}
    />
  );
}

export default ProtectedRoute
