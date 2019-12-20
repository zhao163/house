<template>
  <div class="aboutUs">
    <h2 class="title">
      <span class="text">我们的简介</span>
    </h2>
    <div class="info">
      <div class="aboutBox">
        <h4>以琳福佑家政有限公司</h4>
        <p>
         以琳福佑是一家具有国际化管理创新的家政服务有限公司，家政服务项目涉及20个门类，
         200多个服务项目，适应市场需求的多样性特点。公司以三高为路线：高标准、高质量、
         高效率，精益求精的质量，满足客户至上、全心服务、专业、品质、以打造现代服务品牌。 
        </p>
      </div>
    </div>

    <h2 class="title">
      <span>联系我们</span>
    </h2>

    <div class='mapContent'>
      <Map></Map>
    </div>

    
    
  </div>
</template>

<script>
import Map from './map'
export default {
  name: 'AboutUs',
  data() {
    return {

    }
  },
  components: {
    Map
  }
}
</script>

<style lang="less" scoped>
  .aboutUs {
    background: #fafcfc;
    .title {
      font-size: 1.2rem;
      color: #000;
      text-align: center;
      padding: 1.7rem 0;
      span {
        display: inline-block;
        line-height: 1.4rem;
        position: relative;
        padding: 0 6%;
        font-weight: normal;

        &::before {
          width: 100%;
          height: 1px;
          background: #333;
          position: absolute;
          left: 0;
          right: 0;
          content: '';
          bottom: -20px;
        }
        &::after {
          display: block;
          overflow: hidden;
          content: '';
          background: #333;
          border: 10px solid #fafcfc;
          position: absolute;
          left: 50%;
          width: 4px;
          bottom: -32px;
          height: 4px;
          border-radius: 100%;
          margin-left: -12px;
        }
      }
    }

    .info {
      max-width: 39rem;
      margin: 0 auto;
      .aboutBox {
        line-height: 220%;
        position: relative;
        margin: 0 3.4rem;

        h4 {
          font-size: 18px;
          color: #c11e2b;
          font-weight: normal;
          text-align: center;
          padding: 20px 0;
        }

        p {
          padding-bottom: 0.34rem;
          font-size: 0.4rem;
          text-indent: 2em;
        }

        &::before {
          position: absolute;
          line-height: 100%;
          left: -2.9rem;
          top: .7rem;
          content: '“';
          font-size: 6.8rem;
          color: #f1f2f2;
          font-weight: bold;
          overflow: hidden;
        }

        &::after {
          overflow: hidden;
          line-height: 100%;
          position: absolute;
          bottom: -3.4rem;
          right: -2.9rem;
          content: '”';
          font-size: 6.8rem;
          color: #f1f2f2;
          font-weight: bold;
        }
      }
    }

    .mapContent {
      position: relative;
      background-color: #fff;
      width: 90%;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 3px #ededed;
      padding: .68rem;
      margin: auto;

      dl {
        width: 100%;
        font-size: 12px;
        margin: 0 auto;
        position: relative;
        bottom: 0;
        line-height: 28px;
        color: #fff;
        padding: 10px 0;
        background: rgba(0,0,0,0.5);

        dt {
          margin-left: 25px;
          font-size: 14px;
        }

        dd {
          span {
            margin: 0 70px;
          }
        }
      }
    }
  }
</style>