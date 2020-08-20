import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ],
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
