<template>
  <div class="container">
    <div class="aside">
      <sider-menu></sider-menu>
    </div>
    <div class="content">
      <div class="header">
        <global-header></global-header>
      </div>
      <div class="main">main</div>
      <div class="footer">
        <global-footer :linkList="footerLinks" :copyright="copyright"></global-footer>
      </div>
    </div>
  </div>
</template>
<script>
import SiderMenu from "@/components/menu/SiderMenu"
import GlobalHeader from "@/components/globalheader/GlobalHeader"
import GlobalFooter from "@/components/globalfooter/GlobalFooter"
export default {
  name: 'Index',
  components: {
    SiderMenu,
    GlobalHeader,
    GlobalFooter
  },
  computed: {
    user() {
      return this.$store.state.account.user;
    },
    footerLinks() {
      return this.$store.state.setting.footerLinks
    },
    copyright() {
      return this.$store.state.setting.copyright
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  overflow: auto;
  .aside{
    width: 5.1rem;2
    background-color: #001529;
  }
  .content {
    flex: 1;
    background-color: #f0f2f5;
    .main {
      height: 500px;
    }
    .footer {
      // height: 2.44rem;
    }
  }

}
</style>