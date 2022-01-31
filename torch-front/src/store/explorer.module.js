export const explorer = {
  namespaced: true,
  state: {
    randomUsers: [],
  },
  mutations: {
    setRandomUsers(state, randomUsers) {
      state.randomUsers = randomUsers;
    },
  },
};
