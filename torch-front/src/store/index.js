import VuexPersistence from 'vuex-persist';
import { auth } from './auth.module';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default {
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
    userItemAvatar: {
      image: '',
      active: false,
    },
    mutualUserList: [],
    updateUserList: [],
    stat: {
      name: '',
      range: [0, 0],
      userValue: 0,
      otherUserValue: 0,
    },
    finishedRoutineStats: {
      exerciseTime: 0,
      breakTime: 0,
      userEvaluation: {
        value: 0,
        comment: '',
      },
      routineEvaluation: {
        value: 0,
        comment: '',
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
      time: 0,
      endingState: 0,
      done: false,
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
  },
  plugins: [vuexLocal.plugin],
};
