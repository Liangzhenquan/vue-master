<template>
  <div class="global-header light">
    <div class="global-header-right">
      <el-tooltip class="item" effect="dark" content="帮助文档" placement="bottom">
        <i class="el-icon-question"></i>
      </el-tooltip>
      <header-notice></header-notice>
    </div>
  </div>
</template>
<script>
import HeaderNotice from "./HeaderNotice"
export default {
  name: "GlobalHeader",
  components: {
    HeaderNotice
  }
}
</script>
<style lang="less" scoped>
.global-header {
  padding: 0 .24rem 0 0;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  display: flex;
  justify-content: flex-end;
  .global-header-right {
    line-height: 1.32rem;
  }

}
</style>