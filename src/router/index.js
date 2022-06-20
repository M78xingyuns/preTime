import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../views/Home'
import index from '../views/index/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
