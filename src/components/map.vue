<template>
  <div style="height:100%; width:90%; margin:0 auto">
    <div class="map" id="Map"></div>
  </div>
</template>


<script>
  export default {
    name: "bdMap",
    components: {},
    data() {
        return {};
    },
    mounted() {
      //创建地图实例
      const map = new BMap.Map("Map");
      // 创建点坐标
      const point = new BMap.Point(112.535006,37.886063);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 15);
      //启用滚轮放大缩小
      map.enableScrollWheelZoom();  


      // 百度地图API功能
      var marker = new BMap.Marker(point);  // 创建标注
      map.addOverlay(marker);              // 将标注添加到地图中
      var opts = {
        width : 200,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title : "以琳福佑家政有限公司" , // 信息窗口标题
        enableMessage:true,//设置允许信息窗发送短息
        message:" "
      }
      var infoWindow = new BMap.InfoWindow("地址：山西省太原市万柏林区恒大滨河左岸16号楼2单元201", opts);  // 创建信息窗口对象 
      marker.addEventListener("click", function(){          
        map.openInfoWindow(infoWindow,point); //开启信息窗口
      });
        
    }
  };
</script>

<style lang="less">
  .map {
    width: 100%;
    height: 500px;

    .BMap_bubble_title {
      font-size: 14px;
      line-height: 36px!important;
      color: #B77615
    }

    .BMap_bubble_content {
      font-size: 12px;
      line-height: 26px;
    }
  }
  
 </style>