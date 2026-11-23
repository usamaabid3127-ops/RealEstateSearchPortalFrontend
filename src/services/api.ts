import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }).then(response => response.data),
  
  register: (email: string, password: string) => 
    api.post('/auth/register', { email, password }).then(response => response.data),
};
export const propertiesApi = {
  getProperties: (filters = {}) => 
    api.get('/properties', { params: filters }).then(response => response.data),
  
  getProperty: (id: number) => 
    api.get(`/properties/${id}`).then(response => response.data),
};

export const favoritesApi = {
  getFavorites: (token: string) => 
    api.get('/favorites', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => response.data),
  
  toggleFavorite: (propertyId: number, token: string) => 
    api.post(
      `/favorites/${propertyId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then(response => response.data),
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token is invalid, redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;