import Vue from 'vue'
import VueRouter from 'vue-router'
import Cafe from '../components/Cafe.vue'
import CafeView from '../components/CafeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cafe',
    component: Cafe
  },
  {
    path: '/cafe/view',
    name: 'CafeView',
    component: CafeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
