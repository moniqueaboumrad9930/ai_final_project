import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const ProtectedRoute = ({children}) => {

    const {currentUser} = useAuth();
    console.log('Current user:', currentUser);
    if (currentUser === undefined) return null;

    if(!currentUser){
        return <Navigate to='/' replace/>
    }
    return children;
};

export default ProtectedRoute;