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
    },
  },
  actions: {
    // getAllActivities() {
    //   return ActivityService.all().then(
    //     (res) => Promise.resolve(res),
    //   );
    // },
    getByUsername({ commit }, username) {
      return ActivityService.fetchActivityByName(username).then(
        (res) => {
          commit('fetchSuccess', res);
          return Promise.resolve(res);
        },
      );
    },
  },
};
