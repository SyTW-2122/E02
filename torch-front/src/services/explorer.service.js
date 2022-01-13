import axios from 'axios';

const API_URL = 'http://localhost:5000/api/explore/';

class ExplorerService {
  fetchByRoutine = (routine) => axios
    .get(`${API_URL}get/${routine}`)
    .then((response) => response.data);

  fetchByUsername = (username) => axios
    .get(`${API_URL}get/${username}`)
    .then((response) => response.data);

  all = () => axios
    .get(`${API_URL}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export default new ExplorerService();
