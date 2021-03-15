import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notfound from '../views/404.vue'
//import Header from '../app_header.vue'
import Nosotros from '../views/Nosotros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',  
    component: () => import('../views/Home.vue')
  },
  {
    path: '/notfound',
    name: 'Notfound',
    //component: Header
    component: () => import('../views/404.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
