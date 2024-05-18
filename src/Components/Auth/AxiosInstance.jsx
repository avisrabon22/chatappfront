import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ToastService from '../Toast';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',  // API base URL
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('Authorization');
        if (token) {
            config.headers['Authorization'] = `Bearer+${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle token validation
axiosInstance.interceptors.response.use(
    
    (response) => response,
    (error) => {
        const navigator = useNavigate();
        if (error.response.status === 401) {
            ToastService.error('Session expired. Please login again.');
            // If token is invalid, remove it and redirect to login
            Cookies.remove('Authorization');
            navigator('/login');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
