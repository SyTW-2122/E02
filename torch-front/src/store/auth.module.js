import AuthService from '../services/auth.service';

const userData = JSON.parse(localStorage.getItem('user'));
const initialState = userData
  ? { status: { loggedIn: true }, userData }
  : { status: { loggedIn: false }, userData: null };

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    isLoggedIn: () => initialState.status.loggedIn,
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
  },
};
