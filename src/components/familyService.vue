<template>
  <div class='family'>
    <h2 class="title">
      <span class="text">我们的产品</span>
    </h2>
    <div class='familyPurpose'>以琳福佑传递希望之光</div>
    <div class="servicesBox">
      <div class="k1120">
        <div v-for="(item, index) in imgSrc" :key="index">
          <div class="servicesIcon">
            <img :src="item.url" alt="">
          </div>
          <h3>{{item.position}}</h3>
          <p v-for="(item2, i) in item.text" :key="i">{{item2}}</p>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'familyService',
  data() {
    return {
      imgSrc: [
        {
          position: '保洁服务',
          url: '../../static/images/clean.png',
          text: ['-日常保洁', '-深度保洁', '-长期保洁','-擦玻璃','-长期保洁','-新居开荒','-厨房保养','-卫生间保养','-地板打蜡','-皮沙发保养']
        },
        {
          position: '保姆',
          url: '../../static/images/moon.png',
          text: ['-家庭长期做饭', '-临时看护','-老人陪护','-老人助洁']
        },
        {
          position: '月嫂',
          url: '../../static/images/moon1.png',
          text: ['-月嫂','-育儿嫂','-催乳服务']
        },
        {
          position: '家电清洗',
          url: '../../static/images/babySitter.png',
          text: ['-油烟机清洗', '-冰箱清洗','-空调清洗','-洗衣机清洗','-饮水机清洗','-微波炉清洗','-电烤箱清洗','-消毒柜清洗','-灶台清洗','-热水器清洗']
        },
        {
          position: '企业服务',
          url: '../../static/images/homeAppliance.png',
          text: ['-办公室保洁', '-公寓保洁','-企业开荒保洁','-地毯清洗','-中央空调维修','-中央空调清洗','-企业搬迁']
        }
      ]
    }
  }
  
}
</script>

<style lang="less" scoped>

  .family {
    .familyPurpose {
      text-align: center;
      font-size: 0.48rem;
      letter-spacing: 1em;
      padding: 0 0 .68rem 0;
      color: #999;
    }
    .servicesBox {
      position: relative;
      &::before {
        width: 100%;
        height: 1px;
        background: #eee;
        position: absolute;
        left: 0;
        right: 0;
        content: '';
        top: 47px;
      }
      .k1120 {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        text-align: center;

        h3 {
          font-size: 20px;
          color: #333;
          padding: 5px 0;
        }

        p {
          color: #999;
          font-size: 12px;
          line-height: 200%;
        }

        .servicesIcon {
          display: inline-block;
          cursor: pointer;
          width: 90px;
          line-height: 90px;
          height: 90px;
          border-radius: 50%;
          text-align: center;
          position: relative;
          z-index: 1;
          color: #333;
          font-size: 16px;
          background: #fff;
          border: 1px solid #a3a3a3;
          transition: background 0.2s, color 0.2s;

          img {
            width: 40px;
            height: 40px;
            position: absolute;
            background-size: 40px 40px;
            top: 50%;
            left: 50%;
            margin: -20px 0 0 -20px;
          }
        }
      }
    }
  }

</style>