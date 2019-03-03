<template>
  <div class="footer">
    <div class="links">
      <a 
        target="_blank" 
        href="item.link ? item.link : 'javascript: void(0)'"
        v-for="(item,index) in linkList"
        :key="index"
      >
        {{item.name}}
      </a>
    </div>
    <div class="copyright">
      Copyright <i class="el-icon-info"> {{copyright}}</i>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalFooter",
  props: ['linkList','copyright']
}
</script>
<style lang="less" scoped>
.footer {
  padding: 0 .32rem;
  margin: .96rem .48rem;
  text-align: center;
  .copyright {
    color: rgba(0, 0, 0, .45);
    font-size: .28rem;
  }
  .links {
    margin-bottom: .16rem;
    a:not(:last-child) {
      margin-right: .8rem;
    }
    a{
      color: rgba(0, 0, 0, .45);
      transform: all .3s;
    }
  }
}
</style>