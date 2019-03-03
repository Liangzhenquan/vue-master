<template>
  <div class="container">
    <!-- 内容区 开始 -->
    <div class="content">
      <!-- 内容区大标题 开始 -->
      <div class="top">
        <div class="header">
          <img alt="logo" class="logo" src="static/imgs/vue-logo.png">
          <span class="title">{{systemName}}</span>
        </div>
        <div class="desc">{{desc}}</div>
      </div>
      <!-- 内容区大标题 结束 -->
      <!-- 表单 开始 -->
      <div class="login">
        <el-form ref="ruleForm2" :model="ruleForm2" :rules="rules">
          <el-tabs size="large" v-model="activeName">
            <el-tab-pane label="账号密码登录" name="first">
               <el-alert 
                 :title="errorMessage" 
                 type="error" 
                 show-icon  
                 v-show="error"
                 @close="handle()"
              >
              </el-alert>
              <el-form-item prop="admin">
                <el-input placeholder="admin" v-model="ruleForm2.admin"> 
                  <i class="el-icon-edit" slot="prefix"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input placeholder="请输入密码" v-model="ruleForm2.password">
                  <i class="el-icon-edit" slot="prefix"></i>
                </el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane size="large" label="手机号登录" name="second">
              <el-form-item>
                <el-input placeholder="请输入手机号码"> 
                  <i class="el-icon-edit" slot="prefix"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-row>
                  <el-col :span="16">
                    <el-input placeholder="请输入验证码"> 
                      <i class="el-icon-edit" slot="prefix"></i>
                    </el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-button>获取验证码</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
          <div class="auto">
            <el-checkbox>自动登录</el-checkbox>
            <a>忘记密码</a>
          </div>
          <el-form-item>
            <el-button 
              :loading="loading"
              style="width: 100%;margin-top: 24px" 
              type="primary"
              @click="submitForm('ruleForm2')"
            >
              登录</el-button>
          </el-form-item>
          <div class="login-footer">
            <div>
              <span>其他登录方式</span>
              <i class="icon el-icon-share"></i>
              <i class="icon el-icon-share"></i>
              <i class="icon el-icon-share"></i>
            </div>
            <router-link to="/">注册账号</router-link>
          </div>
        </el-form>
      </div>
      <!-- 表单 开始 -->
    </div>
    <!-- 内容区 结束 -->
    <!-- 底部 开始 -->
    <div class="footer">
      <global-footer :linkList="footerLinks" :copyright="copyright"></global-footer>
    </div>
    <!-- 底部 结束 -->
  </div>
</template>
<script>
import GlobalFooter from "@/components/globalfooter/GlobalFooter"
import axios from "axios"
export default {
  name: "Login",
  components: {
    GlobalFooter
  },
  data() {
    return {
      error: false,
      errorMessage: '',
      desc: "Ant Design 是西湖区最具影响力的 Web 设计规范",
      systemName: "Vue element Admin",
      activeName: 'first',
      loading: false,
      ruleForm2: {
        admin: '',
        password: ''
      },
      rules: {
        admin: [
          { required: true, message: '请输入账户名', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    footerLinks() {
      return this.$store.state.setting.footerLinks
    },
    copyright() {
      return this.$store.state.setting.copyright
    }
  },
  methods: {
    // 密码或账户错误提示组件关闭时
    handle() {
      this.error = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post("/login", {
            name: this.ruleForm2.admin,
            password: this.ruleForm2.password
          }).then((res)=> {
            let result = res.data
            this.loading = true;
            if(result.code == -1) {
               setTimeout(()=>{
                  this.loading = false
              },1000);
              this.errorMessage = res.data.message;
              this.error = true;
            }else {
              let user = result.data.user;
              this.$store.dispatch('account/setuser', user)
              this.$router.push("/index")
            }
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 2.2rem;
  background-size: 100%;
  .content {
    padding: .64rem 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 2.24rem 0 .48rem;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, .85);
          font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, .45);
        margin-top: .24rem;
        margin-bottom: .5rem;
      }
    }
    .login {
      width: 7.36rem;
      margin: 0 auto;
      .auto {
        display: flex;
        justify-content: space-between;
      }
      .login-footer {
        display: flex;
        justify-content: space-between;
        .icon {
          font-size: .48rem;
          color:  rgba(0, 0, 0, .2);
          margin-left: .32rem;
          vertical-align: middle;
          cursor: pointer;
          transform: color .3s;
          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }
}
</style>