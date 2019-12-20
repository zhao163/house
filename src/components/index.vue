<template>
  <div class="index">
    <div class="bg">
      <img src="../assets/home.jpg" alt="">
    </div>

    <div class="purpose">
      <h2 class="title">
        <span class="text">我们的宗旨</span>
      </h2>
      <div class="babyBg">
        <img src="../../static/images/index/bady.jpeg" alt="">
        <div class="babytext"> 
          <h3>以琳福佑·家庭无忧</h3>
          <p>
            山西以琳福佑家政是非盈利性质的家政服务机构，
            致力于为城市家庭提供专业、优质的家政服务，
            "快乐服务、快乐工作、快乐生活"的服务理念，打造特色服务：
            (1) 与政府扶贫项目结合，专业学校结合；
            (2) 服务人员严格的专业技能培训；
            (3) 详细的服务员工作档案记录；
            (4) 完善的后续服务。工作人员定期走访客户，督导检查家政人员的工作情况，了解服务反馈。
          </p>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'index',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .index {
    .bg{
      height: 30.9rem;
      overflow: hidden;
      img{
        width:140%;
      }
    }
    .purpose{
      margin: 0 150px;
      .babyBg {
        display: flex;
        align-items: center;
        font-size: 14px;
        img{
          width: 300px;
          margin: 0 100px 0 40px;
        }
        .babytext{
          font-size: 14px;
          color: #333;
          text-align: left;
          line-height: 36px
        }
      }

    }
  }

</style>
