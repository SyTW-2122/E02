import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

class AuthService {
  login = (user) => axios
    .post(`${API_URL}login`, {
      username: user.username,
      password: user.password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.accessToken);
      }
      return response.data;
    });

  logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  register = (user) => axios.post(`${API_URL}register`, {
    username: user.username,
    password: user.password,
  });
}

export default new AuthService();
