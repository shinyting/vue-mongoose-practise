import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import New from './components/New'
import All from './components/all'
import Hot from './components/hot'
import Star from './components/star'
import Login from './components/login'

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
  },
  '/all': {
    component: All
  },
  '/hot': {
    component: Hot
  },
  '/star': {
    component: Star
  },
  '/login': {
    component: Login
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
