import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const protectedRoutes = () => {
    let auth = {'token': false}
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default protectedRoutes