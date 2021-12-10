import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'sign-in', {
                username: user.username,
                password: user.password
            })
            .then((response) => {
                if(response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
}

/* logout() and register() */

export default new AuthService();
