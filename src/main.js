import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import List from './components/List'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/list': {
    component: List
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
