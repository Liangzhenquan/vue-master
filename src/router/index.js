import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/pages/login/Login"
import Index from "@/pages/index/Index"
import Test from "@/pages/test/Test"
import Test1 from "@/pages/test/Test1"
Vue.use(Router)
// component: resolve => require(['@/components/home'],resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    }, {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/index/test1',
          name: 'test1',
          component: Test1
        }
      ]
    }, {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
