<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
    // this.$router.beforeEach((to, from, next)=> {
    //   if(to.matched.some(record=>record.meta.requiresAuth)) {
    //     console.log("需要权限")
    //     next();
    //   }else {
    //     console.log("不需要权限")
    //     next();
    //   }
      
    // })
  // }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
