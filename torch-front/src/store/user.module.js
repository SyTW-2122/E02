import UserService from '../services/user.service';

// const token = JSON.parse(localStorage.getItem('token'));

export const user = {
  namespaced: true,
  actions: {
    edit({ commit }, userInfo, username) {
      return UserService.edit(userInfo, username).then(
        (res) => {
          commit('editSuccess', res.data);
          return Promise.resolve(res.data);
        },
        (error) => Promise.reject(error),
      );
    },
  },
  mutations: {
    editSuccess(state, userInfo) {
      state.user = userInfo;
    },
  },
};
