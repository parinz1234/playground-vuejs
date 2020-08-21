import axios from 'axios'
// initial state
const state = () => ({
  posts: [],
  loading: false,
})

// mutations
const mutations = {
  startLoading(state) {
    state.loading = true
  },
  addPosts(state, payload) {
    state.posts = payload.posts
  },

  finishLoading(state) {
    state.loading = false
  },
}

// actions
const actions = {
  // 1st parameter is context (store object) which can access to commit, state, distpatch
  async getPosts({ commit }) {
    commit('startLoading')
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    )
    commit({
      type: 'addPosts',
      posts: response.data,
    })
    commit('finishLoading')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
