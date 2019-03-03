export default {
  namespaced: true,
  state: {
    user: {}
  },
  actions: {
    setuser (ctx, user) {
      ctx.commit("setuser", user);
    }
  },
  mutations: {
    setuser(state, user) {
      state.user = user;
    }
  }
}