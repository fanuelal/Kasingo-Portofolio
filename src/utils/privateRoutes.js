import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
export var auth = {'token': false}
const protectedRoutes = () => {
    const location = useLocation();
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" replace state={{from: location}}/>
    )
}
export default protectedRoutes