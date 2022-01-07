import ExplorerService from '../services/explorer.service';

export const explorer = {
  namespaced: true,
  state: {
    explorer: {
      routines: [
        description = "",
        sportName = "",
        valoration = Number,
      ],
      users: [
        username = "",
        valoration = Number,
      ],
    },
  },
  getters: {
    getUserName: (state) => state.explorer.users.username,
    getUserValoration: (state) => state.explorer.users.valoration,
    getDescription: (state) => state.explorer.routines.description,
    getSportName: (state) => state.explorer.routines.sportName,
    getRoutineValoration: (state) => state.explorer.routines.valoration,
  },
  actions: {
    loadUserValoration({ commit }, explorerData, valoration) {
      return ExplorerService.loadUserValoration(explorerData, valoration).then(
        (res) => {
          commit('valoration saved', res.data);
          return Promise.resolve(res.data);
        },
        (error) => Promise.reject(error),
      );
    },
    loadRoutineValoration({ commit }, explorerData, valoration) {
      return ExplorerService.loadRoutineValoration(explorerData, valoration).then(
        (res) => {
          commit('valoration saved', res.data);
          return Promise.resolve(res.data);
        },
        (error) => Promise.reject(error),
      );
    },
  },
  mutations: {
    updateUserValoration(state, newValoration) {
      state.explorer.users.valoration = newValoration;
    },
    updateRoutineValoration(state, newValoration) {
      state.explorer.routines.valoration = newValoration;
    },
  },
};
