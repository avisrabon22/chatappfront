import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from './AxiosInstance';
import PropTypes from 'prop-types';

const RouteGuard = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const validateToken = async () => {
            try {
                await axiosInstance.get('/ValidateToken', { withCredentials: true });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        
        validateToken();
    }, []);
    
    if (isLoading) {
        console.log('Loading...');
        return <div>Loading...</div>;
    }
    
    return isAuthenticated ? children : <Navigate to="/" />;
};

RouteGuard.propTypes = { children : PropTypes.node.isRequired};

export default RouteGuard;
