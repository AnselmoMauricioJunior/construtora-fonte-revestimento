import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/HomeView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/Sobre/SobreView.vue')
  },
  {
    path: '/obras',
    name: 'obras',
    component: () => import('../views/Obras/ObrasView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/Contato/ContatoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
