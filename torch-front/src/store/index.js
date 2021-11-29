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
    inprocessRoutine: [],
    exercise: {
      name: '',
      media: '',
      reps: 0,
      sets: 0,
      stopedTime: 0,
      currentTime: 0,
      state: 'current',
      tags: [],
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
