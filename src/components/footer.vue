<template>
  <div class="footer">
    <div class='mapContent'>
      <dl>
        <dt>联系方式</dt>
        <dd>
          <span>中国 · 太原 · 万柏林区恒大滨河左岸16号楼2单元201</span>
          <span>公司：以琳福佑家政有限公司</span><br>
          <span>电话：0351-610-3959</span>
          <span>邮编：030000</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  components: {
    
  },
  data () {
    return {
    }
  },
  mounted() {
  },
  methods: {


  }
}
</script>

<style scoped lang='less'>
    .mapContent {
        width: 100%;
        position: relative;
        top: 50px;
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
</style>
