import axios from 'axios';
/* import authHeader from './auth-header'; */

const API_URL = 'http://localhost:5000/api/auth/';

class UserService {
  getPublicContent = () => axios.get(`${API_URL}all`);

  getUser
}

export default new UserService();
