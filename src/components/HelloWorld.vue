<template>
 <div class="container">
    <div class="content">123</div>
   <el-button>按钮</el-button>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  border: 1px solid red;
  .content {
     background-color: red;
  }
}
</style>
