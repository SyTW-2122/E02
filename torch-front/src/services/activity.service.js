import axios from 'axios';

const API_URL = process.env.VUE_APP_ACTIVITYAPIURL;
class ActivityService {
//   all = (username) => axios
//     .get(`${API_URL}/${username}`)
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     });
// }
  fetchActivityByName = (username) => axios
    .get(`${API_URL}/${username}`)
    .then((response) => response.data);
}

export default new ActivityService();
