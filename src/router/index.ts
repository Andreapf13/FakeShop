import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginUser from '../views/LoginUser.vue'
import ProductsView from '../views/ProductsView.vue'
import EachProduct from '../views/EachProduct.vue'
import UserProfile from '../views/UserProfile.vue'
import AboutView from '@/views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginUser,
  },
  {
    path: '/productsList',
    name: 'productsList',
    component: ProductsView,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: EachProduct,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    
      path: '/:pathMatch(.*)*',
      redirect: "/productsList"
  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
