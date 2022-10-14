import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/addressees');

const service = axios.create({ withCredentials: true, baseURL });

const ADDRESSEE_SERVICE = {
  GET: async () => {
    return await service.get('/')
  },
  CREATE: async (data) => {
    return await service.post('/', data);
  }
};

export default ADDRESSEE_SERVICE;
