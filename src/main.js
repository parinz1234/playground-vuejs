import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

import Counter from './components/vuex/counter.vue'

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
})

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/vuex/counter', component: Counter }],
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
