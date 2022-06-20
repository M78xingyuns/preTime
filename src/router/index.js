import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home'
import li from '../views/shujing/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/li',
    name: 'li',
    component: li
  }
]

const router = new VueRouter({
  routes
})

export default router