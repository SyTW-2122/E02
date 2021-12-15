import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/user/';

class UserService {
  getPublicContent = () => axios.get(`${API_URL}all`);

  getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });
}

export default new UserService();
