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
},
