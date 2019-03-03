// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import "@/mock"
import axios from 'axios'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/styles/reset.css";
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next)=> {
  if(to.meta.requireAuth) {
    console.log("需要权限")
    next();
  }else {
    console.log("不需要权限")
    next();
  }
})

