import axios from 'axios';

const API_URL = 'http://localhost:5000/explore/';

class ExplorerService {
  getPublicContent = () => axios.get(`${API_URL}all`);
}

export default new ExplorerService();