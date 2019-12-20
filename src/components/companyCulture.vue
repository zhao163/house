<template>
  <div class="companyCulture">
    <h2 class="title">
      <span class="text">企业文化</span>
    </h2>
    <img class="culture" src="../../static/images/companycCulture/companyCulture.png" alt="">
    <div class="teamStyle">
      <h2 class="title">
        <span class="text">团队风采</span>
      </h2>
      <div class="teamBg">
        <img src="../../static/images/team/staff1.png" alt="">
        <img src="../../static/images/team/staff2.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyCulture',
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .companyCulture{
    .culture{
      width: 100%;
    }
    .teamBg {
      display: flex;
      justify-content: center;
      img{
        width: 40%;
        padding: 0 1rem;
      }
    }
  }
</style>