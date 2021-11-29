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

    stat: {
      name: '',
      range: [0, 0],
      userValue: 0,
      otherUserValue: 0,
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
