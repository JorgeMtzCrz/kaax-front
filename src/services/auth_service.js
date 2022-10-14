import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/auth');

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  CURRENT_USER: async (token) => {
    return await service.get(`/logged/${token}`)
  },
  SIGNUP: async (user) => {
    return await service.post('/signup', user);
  },
  LOGIN: async (user) => {
    return await service.post('/login', user);
  },
  LOGOUT: async () => {
    return await service.get('/logout');
  }
};

export default AUTH_SERVICE;
