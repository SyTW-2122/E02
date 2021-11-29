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
    },
    routinePreviewCard: {
      name: '',
      media: '',
      description: '',
      date: '',
      owner: '',
      rating: 0,
      comments: [],
      time: 0,//in seconds
      endingState: 0,
      done: false
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
