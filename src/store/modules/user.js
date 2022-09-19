import api from '../../api/user';

export default {
  state: {
    userData: null,
    errors: null,
    isLoading: false,
  },

  mutations: {
    postUserStart(state) {
      state.isLoading = true;
    },
    postUserSuccess(state, payload) {
      state.isLoading = false;
      state.userData = payload;
    },
    postUserFailure(state, payload) {
      state.isLoading = false;
      state.errors = payload;
    },

    reset(state) {
      state.userData = null;
      state.errors = null;
    },
  },

  actions: {
    postUser({ commit }, user) {
      return new Promise((resolve) => {
        commit('postUserStart');
        api
          .postUser(user)
          .then((response) => {
            commit('postUserSuccess', response.data);
            resolve(console.log('data arriwed'));
          })
          .catch((result) => {
            commit('postUserFailure', result.response.data);
          });
      });
    },
  },

  getters: {
    userData(state) {
      return state.userData;
    },
    errors(state) {
      return state.errors;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
};
