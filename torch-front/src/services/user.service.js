import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/';

class UserService {
  all = () => axios
    .get(`${API_URL}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });

  fetchByName = (username) => axios
    .get(`${API_URL}get/${username}`)
    .then((response) => response.data);

  toggleFollow = (currentUser, username) => axios
    .post(`${API_URL}follow/${username}`, {
      username: currentUser,
    })
    .then((response) => response.data);

  edit = (user) => axios
    .put(`${API_URL}edit/${user.urlUsername}`, {
      username: user.username,
      password: user.password,
      subname: user.subname,
      email: user.email,
      bio: user.bio,
      image: user.image,
    });
}

export default new UserService();
