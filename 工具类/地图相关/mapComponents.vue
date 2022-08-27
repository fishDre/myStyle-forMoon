<template>
  <div class="BaiDuMap">
    <baidu-map
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      :double-click-zoom="false"
      @ready="handler"
      :style="`width: 100%; height: ${maxheight}`"
    >
      <!-- mp.enableScrollWheelZoom(true);   -->
      <!-- @click="getClickInfo" -->
      <!-- @ready="handler" -->

      <bm-boundary
        v-if="markerType == 1"
        :name="boundaryName"
        :strokeWeight="1"
        strokeColor="#4cb1fd"
        fillColor="#4cb1fd4D"
      ></bm-boundary>
      <!-- <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="1" :editing="false" fill-color="#DEFAFA" />-->

      <bm-marker
        :position="item.center"
        class="marker"
        v-for="item in markerListNow"
        :key="item.id"
        :icon="{
          url: downicon,
          size: { width: 0, height: 0 },
        }"
      >
        <bm-label
          :dragging="true"
          v-if="markerType == 1"
          :content="
            item.name.length > 4
              ? `<div style='line-height:14px;margin-top:8px;margin-left:4px'><p style='width:50px;font-size:12px;white-space:normal;'>
            ${item.name}</p><p style='margin-top:4px;font-size:14px;'>${item.num}</p></div>`
              : `<div style='line-height:20px;margin-top:16px;'><p>${item.name}</p><p style='margin-top:4px;font-size:16px;'>${item.num}</p></div>`
          "
          @click="markerClick(item)"
          :labelStyle="labelStyle1"
          :offset="{ width: -30, height: -30 }"
        >
        </bm-label>

        <bm-label
          v-if="markerType == 2"
          :content="`<div style='line-height:20px;margin-top:16px;'>
            <p style='margin-top:4px;font-size:16px;color:#ff8d69'>${
              item.num
            }</p>
            <div><img src='${
              type == 1 ? lableStyle2Imge.com : lableStyle2Imge.build
            }' style='width:70%;margin-left:10%;'></div>
          </div>`"
          @click="markerClick(item)"
          :labelStyle="labelStyle2"
          :offset="{ width: -20, height: -20 }"
        >
        </bm-label>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import Vue from 'vue';
import BaiduMap from 'vue-baidu-map';
import downicon from '@/assets/home/downicon.png';
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '73DuNdRUxPqOgE5s7DBQCogE3npk8Uzo',
});
// import province from './province.json';
// import province from './province_sy.json';
// import GeoUtils from './GeoUtils.js';
export default {
  props: [
    'zoom',
    'center',
    'markerList',
    'height',
    'markerType',
    'boundaryName',
    'type',
  ],
  data() {
    return {
      downicon,
      polygonPath: [
        // {lng: 114.412732, lat: 39.911707},
        // {lng: 115.39455, lat: 38.910932},
        // {lng: 116.403461, lat: 40.921336},
        // {lng: 116.403461, lat: 41.921336}
      ],
      // 地址信息
      // address: null,
      // center: {lng: 116.404, lat: 39.915},
      // 地图展示级别
      // zoom: 11,
      labelStyle1: {
        borderColor: '#4cb1fd',
        background: '#4cb1fd',
        fontSize: '14px',
        color: '#fff',
        width: '60px',
        height: '60px',
        borderRadius: '30px',
        textAlign: 'center',
        lineHeight: '35px',
        opacity: 0.8,
      },
      labelStyle2: {
        border: 'none',
        background: 'none',
        fontSize: '15px',
        width: '40px',
        height: '40px',
        textAlign: 'center',
        lineHeight: '20px',
      },
      lableStyle2Imge: {
        com: require('@/assets/operate/dianwei2.png'),
        build: require('@/assets/operate/dianwei1.png'),
      },
      offset: {width: -30, height: -30},
      maxheight: '100%',
      BMap: {},
      map: {},
      // 加载的点
      markerListNow:[],
      // 当前的矩形
      polygon: null
    };
  },
  mounted() {
    if (this.height !== undefined) {
      this.maxheight = this.height;
    }

    //  this.setpolygonPath();
  },
  methods: {
    getBounds() {
      const bounds = this.map.getBounds();                            // 获取地图可视区域
      const sw = bounds.getSouthWest();                         // 获取西南角的经纬度(左下端点)
      const ne = bounds.getNorthEast();                           // 获取东北角的经纬度(右上端点)
      const wn = new this.BMap.Point(sw.lng, ne.lat);             // 获取西北角的经纬度(左上端点)
      const es = new this.BMap.Point(ne.lng, sw.lat);               // 获取东南角的经纬度(右下端点)

      this.polygon = new this.BMap.Polygon([
        new this.BMap.Point(sw.lng,sw.lat),// 左下
        new this.BMap.Point(wn.lng,wn.lat),// 左上
        new this.BMap.Point(ne.lng,ne.lat),// 右上
        new this.BMap.Point(es.lng,es.lat)// 右下
      ], {strokeColor:'blue', strokeWeight:2, strokeOpacity:0.5});
    },
    // 判断点是否在范围内
    IsInPolygon(x,y) {
      const point = new this.BMap.Point(x, y);
      if (BMapLib.GeoUtils.isPointInPolygon(point, this.polygon)) {
        console.log('在区域内');
        return true;
      } 
      console.log('不再区域内');
      return false;
    },
    unique(arr,val) {
      const res = new Map();
      return arr.filter((item) => !res.has(item[val]) && res.set(item[val], 1));
    },
    listenerFunc() {
      // 重新计算区域
      this.getBounds();
      const arr = [];
      // 监听地图
      for(let i = 0;i < this.markerList.length;i++) {
        if(this.IsInPolygon(this.markerList[i].center['lng'],this.markerList[i].center['lat'])) {
          arr.push(this.markerList[i]);
        }
      }
      // 去重
      this.markerListNow = this.unique(arr,'id');
      
    },
    handler({BMap, map}) {
      // console.log('地图渲染完毕触发', BMap, map);
      this.BMap = BMap;
      this.map = map;
      console.log(map.getMapType());
      map.enableScrollWheelZoom(true); // 启用滚轮放大缩小，默认禁用
      console.log(map.getCenter());
      setTimeout(() =>  {
        this.map.addEventListener('touchend',this.listenerFunc);
        this.map.addEventListener('zoomend',this.listenerFunc);},1000);
    },
    markerClick(item) {
      console.log('原本的数据', this.markerList);
      console.log('出来的item', item);
      this.$emit('markerClick', item);
      // this.map.reload();
    },
  },
};
</script>
<style lang="scss">
.anchorBL {
  display: none;
}
.BaiDuMap {
  width: 100vw;
  height: 100vh;
}
// .BMapLabel {
//   /* background:#4cb1fd !important; */
// }
// .BMap_Marker {
//   // img {
//   //   // display: none !important;
//   // }
// }
.BMap_Marker.BMap_noprint {
  display: none;
  /* width:30px !important;
  height:30px !important;
  background:red !important;
  display: inline-block; */
}
</style>
