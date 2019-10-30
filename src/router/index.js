import Vue from 'vue'
import VueRouter from 'vue-router'
import manger from '../pages/manger/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/manger',
    name: 'manager',
    component: manger,
    children:[{
      path:"/home",
      component:()=> import('../pages/manger/Home.vue')
    },
    {
      path:"/order",
      component:()=> import('../pages/manger/Order.vue')
    },
    {
      path:"/user",
      component:()=> import('../pages/manger/User.vue')
    },
  ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
