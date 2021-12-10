import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

class AuthService {
  static login(user) {
    return axios
      .post(`${API_URL}login`, {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  static logout() {
    localStorage.removeItem('user');
  }
}

/* logout() and register() */

export default new AuthService();
