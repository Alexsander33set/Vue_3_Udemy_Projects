import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import BasketRoute from '../views/Basket.vue'
import AboutPage from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketRoute
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
