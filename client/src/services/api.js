import axios from 'axios';

// Set up the base URL for the backend API
const BASE_URL = import.meta.env.VITE_API_URL;

// Create an Axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercept request to add Authorization token if available
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// // Intercept response to handle errors globally (e.g., token expiry)
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             localStorage.removeItem('token');
//             window.location.href = '/login';
//         }
//         return Promise.reject(error);
//     }
// );

// ✅ Export the api instance so you can use it in other files
export default api;
