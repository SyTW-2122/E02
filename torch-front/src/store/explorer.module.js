import ExplorerService from '../services/explorer.service';

export const explorer = {
  namespaced: true,
  state: {
    explorer: {
      routines: [],
      users: [],
    },
  },
  actions: {
    getAll() {
      return ExplorerService.all().then(
        (res) => Promise.resolve(res),
      );
    },
    getByUsername({ commit }, username) {
      return ExplorerService.fetchByUsername(username).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
    getByRoutine({ commit }, routine) {
      return ExplorerService.fetchByRoutine(routine).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
  },
  mutations: {
    fetchSuccess(state, explorerInfo) {
      state.explorer = explorerInfo;
    },
  },
};
