<template>
    <div class="rank_wrap">
      <div class="rank_wrap_box">
        <header>
          <div v-if="isRankNum" style="width:20%">序号</div>
          <div v-for="item in config.title" :key="item.label" class="row-ellipsis" :style="{width: item.width}">{{item.label}}
          <FilterIcon v-if="item.isRank" :orderArr="orderState" :item="item" @changeState='changeState'></FilterIcon>
          </div>
        </header>
        <div class="rank_item" v-for="(it,index) in rankData" :key="index">
          <div v-if="isRankNum" style="width:20%">{{index+1}}</div>
           <div v-for="item in config.title" :key="item.label" class="row-ellipsis" :style="{width: item.width}">{{it[item.key]}}</div>
        </div>
      </div>
    </div>
</template>

<script>
import FilterIcon from './filterIcon.vue';
export default {
  name: 'RankList',
  components: {FilterIcon},
  props: {
    isRankNum: {
      type: Boolean,
      default: true
    },
    rankData: {
      type: Array,
      default: () => [
        {
          cityName: '北京',
          num: 243243,
          percentage: '32%'
        },
        {
          cityName: '北京',
          num: 243243,
          percentage: '32%'
        },
        {
          cityName: '北京',
          num: 243243,
          percentage: '32%'
        },
        
      ]

    },
    config: {
      default: () => ({
        title: [
          {label: '地区名称',width:'30%',key:'areaName',isRank:false},
          {label: '数量',width:'30%',key:'kpiVal', isRank:true},
          {label: '占比',width:'20%',key:'percent',isRank:true},
        ]
      })
      
    }
  },
  data() {
    return {
      orderState: []
    };
  },

  mounted() {
    this.config.title.forEach((item) => {
      if(item.isRank) {
        this.orderState.push({
          ...item,
          state: 'default'
        });
      }
    });
    
  },

  methods: {
    hander(num) {
      return  String(num).replace(/%/g,'');
    },
    changeState(data) {
      console.log('day1',data);
      const info = this.orderState.findIndex((item) => item.key === data.val.key);
      this.orderState.forEach((item) => {
        item.state = 'default';
      });
      console.log(this.orderState,'-----');
      this.orderState[info].state = data.state;

      // 排序 data.value.key  data.state
      console.log(this.rankData,'排序目标',data.val.key);
      switch (data.state) {
      case 'default':
        this.rankData.sort((a,b) => this.hander(b[data.val.key])  - this.hander(a[data.val.key]));
        break;
      case 'up':
        this.rankData.sort((a,b) => this.hander(a[data.val.key])  - this.hander(b[data.val.key]));
        break;
      case 'down':
        this.rankData.sort((a,b) => this.hander(b[data.val.key])  - this.hander(a[data.val.key]));
        break;
      default:
        this.rankData.sort((a,b) => this.hander(b[data.val.key])  - this.hander(a[data.val.key]));
        break;
      }


    }
    
  },
};
</script>

<style lang="scss" scoped>
.rank_wrap {
  padding: 0px 16px;
  margin-bottom: 16px;
  font-size: 13px;
  color: #333333;
  .rank_wrap_box {
    header {
      height: 35px;
      line-height: 35px;
      background: #f0f8fd;
      border: 1px solid #eaeaea;
      display: flex;
      :first-child {
        box-sizing: border-box;
        padding-left: 8px;
      }
    }
  }
 
  .rank_wrap_box {
  .rank_item {
    height: 35px;
    line-height: 35px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    display: flex;
    :first-child {
      box-sizing: border-box;
      padding-left: 8px;
    }
  }
  }
 
}
</style>