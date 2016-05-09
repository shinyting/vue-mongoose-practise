import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/hello': {
    component: Hello
  }
})
router.redirect({
  '*': '/hello'
})

router.start(App, '#app')

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
