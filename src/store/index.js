import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import counter from './modules/counter'
import feed from './modules/feed'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    counter,
    feed,
  },
  plugins: [createLogger()],
})
