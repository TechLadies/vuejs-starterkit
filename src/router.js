import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

Vue.use(VueRouter)

const Login = () => import('./pages/Login.vue')
const Products = () => import('./pages/Products.vue')
const Carts = () => import('./pages/Carts.vue')

const authGuard = (to, from, next) => {
  if (store.state.token) {
    next()    
  } else {
    const token = localStorage.getItem('my-token')
    if (token) {
      store.commit('setToken', token)
      next()
    }
    else
      next('/')
  }
}

const router = new VueRouter({
  mode: 'history',
  hash: 'hash',
  routes: [
    { path: '/', component: Login },
    { path: '/products', component: Products, beforeEnter: authGuard },
    { path: '/carts', component: Carts, beforeEnter: authGuard }
  ]
})

export default router