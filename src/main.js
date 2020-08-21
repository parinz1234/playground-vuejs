import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Counter from './components/vuex/counter.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/vuex/counter', component: Counter }],
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
