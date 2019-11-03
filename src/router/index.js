import Vue from 'vue'
import VueRouter from 'vue-router'
import manger from '../pages/manger/Layout.vue'
import {getToken} from '../utils/auth'
import { Store } from 'vuex'
import { Toast } from 'vant'
import store from '../store'
import user from '../store/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/manger',
    name: 'manager',
    component: manger,
    beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      let token = getToken();
      if(token){
        //查询userinfo
        store.dispatch('user/getUserInfo',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        Toast("token失效")
        // 跳转到登录
        next({path:'/'})
      }
    },
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
