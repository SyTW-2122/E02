import Axios from 'axios';
import AuthService from '../services/auth.service';

const userData = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
const initialState = userData
  ? {
    status: { loggedIn: true },
    userData,
    token,
  }
  : {
    status: { loggedIn: false },
    userData: {
      success: false,
      msg: '',
      token: '',
      data: {
        username: '',
        password: '',
      },
    },
    token: '',
  };

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    isLoggedIn: (state) => state.status.loggedIn,
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getUserName: (state) => state.user.data.username,
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (res) => {
          commit('loginSuccess', res);
          return Promise.resolve(res);
        },
        (error) => {
          commit('loginFailure');
          return Promise.reject(error);
        },
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (res) => {
          commit('registerSuccess');
          return Promise.resolve(res.data);
        },
        (error) => {
          commit('registerFailure');
          return Promise.reject(error);
        },
      );
    },
    async attempt({ commit }) {
      const localToken = JSON.parse(localStorage.getItem('token'));
      if (token !== null) {
        await Axios.get('http://localhost:5000/api/auth/user', {
          headers: {
            ContentType: 'application/json',
            xAuthToken: localToken,
          },
        })
          .then((res) => {
            commit('setToken', localToken);
            commit('loginSuccess', res.data);
          })
          .catch((err) => {
            console.log(err);
            localStorage.removeItem('token');
          });
      }
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    setToken(state, newToken) {
      state.token = newToken;
    },
  },
};
