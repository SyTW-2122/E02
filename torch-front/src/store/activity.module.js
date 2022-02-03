import ActivityService from '../services/activity.service';

export const activity = {
  namespaced: true,
  state: {
    activity: {
      activeUser: '',
      createDate: '',
      type: '',
      title: '',
      description: '',
      estimatedTime: '',
      likes: [],
      comments: [],
      userLike: '',
      routineUserLiked: '',
      image: '',
    },
  },
  actions: {
    getByUsername({ commit }, username) {
      return ActivityService.fetchActivityByName(username).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
  },
  mutations: {
    fetchSuccess(state, userInfo) {
      state.user = userInfo;
    },
  },
};
