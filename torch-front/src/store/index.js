import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      userName: '',
      subtitle: '',
      name: '',
      profileImage: '',
      password: '',
      email: '',
      sportStatsList: [],
      socialtStatsList: [],
      followers: 0,
      following: 0,
      endedRoutinesList: [],
      createdRoutinesList: [], 
    },
    finishedRoutineStats: {
      exerciseTime: 0,
      breakTime: 0,
      userEvaluation: {
        value: 0,
        comment: "",
      },
      routineEvaluation: {
        value: 0,
        comment: "",
      }, 
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
