import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '404',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '404 - Not Found' }
    },
    {
      path: '*',
      redirect: { name: 'NotFound' }
    }
  ]
})
