import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const from = location.pathname;
    console.log(location);
    if(user){
        return children;
    }
    return <Navigate state={from} to='/login'></Navigate>
};

export default ProtectedRoute;