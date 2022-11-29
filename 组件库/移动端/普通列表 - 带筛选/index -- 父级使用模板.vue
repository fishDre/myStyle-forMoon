<template>
  <div class="guest">
    <Panel :showMessageData='panelList'></Panel>
    <div class="label_wrap_box">
      <span :class="{active: activeValue===item}" @click="checkTab(item)" v-for="item in tabBaseInfo" :key="item">{{item}}</span>
    </div>
    <div class="card_wrap_box">
      <Card v-for="item in cardList" :key="item.kpiId" :select='selectedData' :item="item"  @clearCheck='getRankList'></Card>
    </div>
    <!-- <FTitle name='号码趋势'>
      <div class="card_wrap_box">
        <LineChart></LineChart>
      </div>
    </FTitle> -->
     <FTitle :name='rankName'  v-if="rankList.length > 0">
      <div class="card_wrap_box fix">
        <ReankList :rankData='rankList'></ReankList>
      </div>
    </FTitle>
    <footer>—— 我已经到底啦! ——</footer>
  </div>
</template>

<script>
// import LineChart from '@/components/common/lineChart.vue';
import {getBoardOne,getRegionRank} from '@/api/common/index';
import ReankList from '@/components/common/rankList.vue';
import {mapState} from 'vuex';
export default {
  name: 'Guest',
  components:{ReankList},
  data() {
    return {
      activeValue: '全部指标',
      rankName:'地区排名',
      panelList: [],
      selectedData:[],
      cardList: [],
      rankList:[],
    };
  },
  computed: {
    ...mapState(['paramsALL']),
    tabBaseInfo() {
      let data = [];
      this.$store.state.labelData.forEach((item) => {
        if(item.name === 'Guest') {
          data = item.childrenLabel;
          return true;
        }
      });
      return data;
    }
  },
  watch: {
    paramsALL: {
      handler(val) {
        console.log(val,'变化');
        this.getBoardOneList();
      },
      deep:true
      
    }
  },
  mounted() {
    // 默认调用
    this.getBoardOneList();
  },

  methods: {
    checkTab(item) {
      console.log(item);
      this.activeValue = item;
      this.getBoardOneList();
    },
    async getBoardOneList() {
      const param = {
        ...this.paramsALL,
        ckpiType: this.activeValue
      };
      const {data} =  await getBoardOne(param);
      this.cardList = data || [];
      this.panelList = data.slice(0,3); 
      if(data.length > 0) {
        this.selectedData = [data[0].kpiId];
        this.getRankList(data[0]);
      }else{
        this.rankList = [];
      }
      console.log(data);
    },
    async getRankList(item) {
      console.log('当前指标',item);
      this.selectedData = [item.kpiId];
      const param = {
        ...this.paramsALL,
        ckpiType: this.activeValue,
        kpiId:item.kpiId
      };
      const {data} = await getRegionRank(param);
      this.rankList = data || [];
    }
    
  },
};
</script>

<style lang="scss" scoped>
.card_wrap_box.fix {
  height: auto;
}
</style>