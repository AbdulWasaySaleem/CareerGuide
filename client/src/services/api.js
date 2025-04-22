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

// Request interceptor to add authorization token to every request
api.interceptors.request.use(
  (config) => {
    // Get auth object from localStorage
    const authString = localStorage.getItem('auth');
    
    if (authString) {
      try {
        // Parse the JSON string to get the auth object
        const auth = JSON.parse(authString);
        
        // If token exists in the auth object, add it to the request headers
        if (auth && auth.token) {
          config.headers['Authorization'] = `Bearer ${auth.token}`;
        }
      } catch (error) {
        console.error('Error parsing auth from localStorage:', error);
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Handle 401 Unauthorized or 403 Forbidden responses
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.log('Authentication error:', error.response.data.message || 'Session expired');
      // You could redirect to login page here
      // window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default api;