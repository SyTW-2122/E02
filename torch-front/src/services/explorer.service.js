import axios from 'axios';

const API_URL = 'http://localhost:5000/api/explore/';

class ExplorerService {
  loadUserValoration = (explorer) => axios
    .put(`${API_URL}`, {
      userValoration: user.valoration,
    });

  loadRoutineValoration = (explorer) => axios
    .put(`${API_URL}`, {
      routineValoration: routine.valoration,
    });
}

export default new ExplorerService();