import axios from 'axios';

const API_URL = process.env.VUE_APP_ACTIVITYAPIURL;
class ActivityService {
  fetchActivityByName = (username) => axios
    .get(`${API_URL}/${username}`)
    .then((response) => response.data);
}

export default new ActivityService();
