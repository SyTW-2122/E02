import axios from 'axios';

const API_URL = process.env.VUE_APP_USERAPIURL;
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

  fetchById = (id) => axios
    .get(`${API_URL}get/user/${id}`)
    .then((response) => response.data);

  getUserImage = (id) => axios
    .get(`${API_URL}get/${id}/image`)
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

  changePassword = (obj) => axios
    .put(`${API_URL}edit/${obj.u.username}/password`, {
      password: obj.p,
    });

  viewNotification = (obj) => axios
    .put(`${API_URL}notification/${obj.username}/view`, {
      id: obj.id,
    });
}

export default new UserService();
