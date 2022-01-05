import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/';

class UserService {
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
