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
    getAll({ commit }) {
      return ExplorerService.all().then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
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
    getBySportName({ commit }, sportName) {
      return ExplorerService.fetchBySportName(sportName).then(
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
