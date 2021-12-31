import Axios from 'axios';

const explorerData = JSON.parse(localStorage.getItem('explorer'));
const explorerState = explorerData
  ? {
    routineData: {
      valoration,
      sportName,
      description,
    },
    user: {
      username,
      valoration,
    },
    search: {
      userPreferences,
      recommendations,
    },
  }
  : {
    routineData: {
      valoration: null,
      sportName: null,
      description: null,
    },
    user: {
      username: null,
      valoration: null,
    },
    search: {
      userPreferences: null,
      recommendations:null,
    },
  };

export const explorer = {
  namespaced = true,
  state: explorerState,
  getters: {
    getUserName: (state) => state.user.username,
    getUserValoration: (state) => state.user.valoration,
    getDescription: (state) => state.routineData.description,
    getSportName: (state) => state.routineData.sportName,
    getRoutineValoration: (state) => state.routineData.valoration,
    getUserPreferences: (state) => state.search.userPreferences,
    getRecommendations: (state) => state.search.recommendations,
  },
  actions: {
    loadValoration({ commit }) {
      commit('valuation saved');
    },
  },
  mutations: {
    setUserValoration(state, newValoration) {
      state.user.valoration = newValoration;
    },
    setRoutineValoration(state, newValoration) {
      state.routineData.valoration = newValoration;
    },
  },
};
