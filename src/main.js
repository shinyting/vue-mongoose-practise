import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/Home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries
  }
})
router.redirect({
  '*': '/Home'
})

router.start(App, '#app')

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
