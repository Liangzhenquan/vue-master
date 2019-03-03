<template>
  <div>
    <div class="logo dark">
      <img src="static/imgs/vue-logo.png" alt="vue">
      <h1>{{systemName}}</h1>
    </div>
    <el-menu :default-openeds="['1', '3']" class="menu">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "SiderMenu",
  computed: {
    systemName () {
      return this.$store.state.setting.systemName
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 1.28rem;
  position: relative;
  // display: flex;
  // justify-content: space-between;
  line-height: 1.28rem;
  padding-left: .48rem;
  -webkit-transition: all .3s;
  transition: all .3s;
  overflow: hidden;
  background-color: #002140;
  img {
    width: .64rem;
    display: inline-block;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    color: #fff;
    font-size: .4rem;
    font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
    font-weight: 600;
    height: .64rem;
    line-height: .64rem;
    margin:0 0 0 .24rem; 
    vertical-align: middle
  }
}
.menu {
  background-color: #001529;
  width: 100%;
  .el-menu-item-group {
    background-color: #000c17;
  }
}
</style>