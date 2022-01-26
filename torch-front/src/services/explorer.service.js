import axios from 'axios';

const API_URL = process.VUE_APP_EXPLORERAPIURL;

class ExplorerService {
  fetchBySportName = (sportName) => axios
    .get(`${API_URL}get/${sportName}`)
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

  getUsers = () => axios
    .get(`${API_URL}get/users`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });

  getRoutines = () => axios
    .get(`${API_URL}get/routines`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export default new ExplorerService();
