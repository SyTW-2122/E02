import UserService from '../services/user.service';
import { auth } from './auth.module';

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
    getByName({ commit }, username) {
      return UserService.fetchByName(username).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
    getById({ commit }, id) {
      return UserService.fetchById(id).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
    getUserImage({ commit }, id) {
      return UserService.getUserImage(id).then(
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
    changePassword({ commit }, obj) {
      return UserService.changePassword(obj).then(
        (res) => {
          commit('imgSearchSuccess', res.data);
          return Promise.resolve(res.data);
        },
        (error) => Promise.reject(error),
      );
    },
    toggleFollow({ commit }, namesObj) {
      return UserService
        .toggleFollow(namesObj.current, namesObj.toFollow)
        .then(
          (res) => {
            commit('updateFollowers', res);
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
    imgSearchSuccess(state, info) {
      console.log(info);
    },
    editSuccess(state, userInfo) {
      state.user = userInfo;
    },
    updateFollowers(state, followData) {
      state.user.followers = followData.toFollow.followers;
      state.user.following = followData.toFollow.following;
      auth.state.userData.followers = followData.current.followers;
      auth.state.userData.following = followData.current.following;
    },
  },
};
