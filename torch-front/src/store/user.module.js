import UserService from '../services/user.service';

// const token = JSON.parse(localStorage.getItem('token'));

export const user = {
  namespaced: true,
  state: {
    user: {
      data: {
      },
      routines: [],
      following: [],
      followers: [],
    },
  },
  actions: {
    getAll() {
      return UserService.all().then(
        (res) => Promise.resolve(res),
      );
    },
    getByUsername({ commit }, username) {
      return UserService.fetchByName(username).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
    edit({ commit }, userInfo, username) {
      return UserService.edit(userInfo, username).then(
        (res) => {
          commit('editSuccess', res.data);
          return Promise.resolve(res.data);
        },
        (error) => Promise.reject(error),
      );
    },
    toggleFollow({ commit }, namesObj) {
      return UserService.toggleFollow(namesObj.current, namesObj.toFollow).then(
        (res) => {
          commit('updateFollowers', res.data);
          return Promise.resolve(res);
        },
        (error) => Promise.reject(error),
      );
    },
  },
  mutations: {
    fetchSuccess(state, userInfo) {
      state.user = userInfo;
    },
    editSuccess(state, userInfo) {
      state.user = userInfo;
    },
    updateFollowers(state, followData) {
      state.user.followers = followData.followers;
      state.user.following = followData.following;
    },
  },
};
