import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import New from './components/New'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/home': {
    component: Home
  },
  '/new': {
    component: New
  }
})
router.redirect({
  '*': '/home'
})

router.start(App, '#app')

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
