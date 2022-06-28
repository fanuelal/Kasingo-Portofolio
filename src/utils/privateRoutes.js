import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
var auth = {'token': true}
const protectedRoutes = () => {
    
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}
export const getAuth = () => {return auth}
export const setAuth = (tokenStat) => {auth = tokenStat} 
export default protectedRoutes