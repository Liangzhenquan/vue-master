import axios from "axios"
// http request请求拦截器 有token值贼配置上token值
axios.interceptors.request.use((config)=> {
  const token = localStorage.getItem("token")
  // 如果请求前存在token,则统一在http请求的header都加上token，不用每次都手动添加
  if(token) { 
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})
//http response拦截器，拦截401状态(token过期)，重新登录
axios.interceptors.response.use((response)=> {
  return response;
}, (error)=> {
  if(error.response) {
    switch(error.response.status) {
      case 401: 
         // 返回401 清除token信息并跳转到登录页面
         localStorage.removeItem("token")
         router.replace({
           path: "/login",
          query: {redirect: router.currentRoute.fullPath}
         })
    }
    return Promise.reject(error.response.data); //返回接口返回的错误信息
  }
})