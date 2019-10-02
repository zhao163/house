<template>
  <div class="header">
    <div class="headNav">
      <div class="logo">
        <img src="../assets/logo1.png" class="logoImg" alt="logo" width="60" height="60">
        <div class="logoText">
          <p class="text">以琳福佑</p>
          <p>THE HOME OF BEAUTIFUL</p>
        </div>
      </div>

      <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="index">首页</el-menu-item>
          <el-menu-item index="familyService">家庭服务</el-menu-item>
          <el-menu-item index="companyCulture">企业文化</el-menu-item>
          <el-menu-item index="aboutUs">关于我们</el-menu-item>
        </el-menu>
        <div class="phone">
          <img src="../assets/phone.png" alt="" srcset="" width="30" height="30">
          <span>0351-610-3959</span>
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import aboutUsVue from './aboutUs.vue';

export default {
  name: 'Head',
  data () {
    return {
      // activeIndex: 'index'
    }
  },
  computed: {
    activeIndex() {
      return this.$route.path.slice(1) == '' ? 'index' : this.$route.path.slice(1)
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({name: key})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .header {
    width:100%;
    height: 80px;
    background: #fff;
    z-index: 5;
    border-bottom: 2px solid #F3F3F3;
    position: fixed;
    top: 0;
    left: 0;
    .headNav{
      display: flex;
      justify-content: space-between;
      width: 90%;
      height: 80px;
      margin: 0 auto;

      @media screen and (max-width: 960px){
        .nav{
          display: none;
        }
      }
      @media screen and (min-width: 960px){
        .nav{
          display: flex;
        }
        .phone {
          line-height: 80px;
          margin: 0 2rem 0 1.2rem;
          img {
            vertical-align: middle;
            letter-spacing: .2em;
          }
          span {
            font-size: 0.55rem;
            color: #909399;
          }
        }
      }

      .logo {
        display: flex;
        padding: 10px 0;
        min-width: 196px;
        .logoImg {
          border-radius: 60px;
        }
        .logoText {
          font-size: 12px;
          font-family: cursive;
          color: #0F6170;
          margin-left: .27rem;
          .text {
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 1em;
            padding: .34rem 0 ;
          }
        }
      }

    }
    
    .el-menu.el-menu--horizontal{
      border: none;
      .el-menu-item {
        font-size: .48rem;
        border-bottom: none;
        height: 80px;
        line-height: 80px;
        margin: 0 .86rem;
      }
    }

    .el-menu--horizontal>.el-menu-item.is-active{
      border: none;
      color: #29c9e6
    }
  }
</style>
