import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/realidad-aumentada',
    name: 'realidad-aumentada',
    component: () => import('../views/RealidadAumentadaView.vue')
  },
  {
    path: '/mapa-interactivo',
    name: 'mapa-interactivo',
    component: () => import('../views/MapaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
