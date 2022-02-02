import RoutineService from '../services/routine.service';
import { auth } from './auth.module';
import { user } from './user.module';

// const token = JSON.parse(localStorage.getItem('token'));

export const routine = {
  namespaced: true,
  state: {
    routine: {
    },
    routines: [
    ],
  },
  actions: {
    getAll({ commit }, username) {
      return RoutineService.all(username).then(
        (res) => {
          commit('fetchAllSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
    getByID({ commit }, paramsObj) {
      return RoutineService
        .fetchByID(paramsObj.username, paramsObj.username)
        .then(
          (res) => {
            commit('fetchSuccess', res);
            return Promise.resolve(res);
          },
        );
    },
    add({ commit }, routineInfo) {
      return RoutineService.createRoutine(routineInfo.username, routineInfo.routine).then(
        (res) => {
          commit('addRoutineSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
    edit({ commit }, username, routineID, routineInfo) {
      return RoutineService
        .editRoutine(username, routineID, routineInfo)
        .then(
          (res) => {
            commit('editRoutineSuccess', res);
            return Promise.resolve(res);
          },
        );
    },
    delete({ commit }, params) {
      console.log(params);
      return RoutineService
        .deleteRoutine(params.user, params.routineID)
        .then(
          (res) => {
            commit('deleteRoutineSuccess', res);
            return Promise.resolve(res);
          },
        );
    },
  },
  mutations: {
    fetchAllSuccess(state, routineInfo) {
      state.routines = routineInfo;
    },
    fetchSuccess(state, routineInfo) {
      state.routine = routineInfo;
    },
    addRoutineSuccess(state, routineInfo) {
      auth.state.userData.routines = routineInfo.user.routines;
      user.state.user.routines = routineInfo.user.routines;
      state.routine = routineInfo.routine;
    },
    editRoutineSuccess(state, routineInfo) {
      console.log(state.routine);
      console.log(routineInfo);
    },
    deleteRoutineSuccess(state, routineInfo) {
      console.log(routineInfo.user);
      auth.state.userData.routines = routineInfo.user.routines;
      user.state.user.routines = routineInfo.user.routines;
      state.routines = state.routines.filter((el) => el._id !== routineInfo.routine); // eslint-disable-line
    },
  },
};
