import ExplorerService from '../services/explorer.service';

export const explorer = {
  namespaced: true,
  state: {
    randomUsers: [],
  },
  getters: {
    randomUsers: (state) => state.randomUsers,
  },
  actions: {
    getUsers({ commit }) {
      return ExplorerService.getRandomUsers().then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    }
  },
  mutations: {
    setRandomUsers: (state, randomUsers) => (state.randomUsers = randomUsers),
  },
};
