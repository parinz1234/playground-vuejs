// initial state
const state = () => ({
  count: 0,
})

// mutation-types
// action-types

// mutations
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
}

export default {
  /* 
    if namespace is true when this module is registered, all of its getters, actions and mutations
    will be automatically namespaced based on the path the module is registered at.
    for this module to commit increment, decrement -> commit('counter/increment'), commit('counter/decrement')
  */
  namespaced: true,
  state,
  mutations,
}
