<template>
  <div class="card-wrap-list" :class="{ listChecked: isSelect }">
    <div class="header">
      <span
        >{{ cardData.buildingName || cardData.enterpriseName
        }}<label :class="fixStyle(Num)">{{ labelList[Num] }}</label></span
      >
      <span
        @click="handlerCheck(cardData)"
        class="rect"
        :class="isSelect ? 'isSelect' : ''"
      ></span>
    </div>
    <!-- 内容插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
    // 已经选择的列表
    checkListforAll: {
      type: Array,
    },
  },

  data() {
    return {
      labelList: ['国企', '私企', '外企', '金牌楼宇', ''],
      isSelect: false,
    };
  },
  computed: {
    Num() {
      if (this.cardData.perfect === 1 && !this.cardData.groupType) {
        return 3;
      }
      if (this.cardData.perfect === 1 && !this.cardData.groupType) {
        return 4;
      }
      return this.cardData.groupType;
    },
  },

  watch: {
    // isAllChecked(newvalue) {
    //   this.isSelect = newvalue;
    // },
    // 监听选择的数据,改变自身状态
    checkListforAll: {
      handler(newvalue) {
        if (newvalue.indexOf(this.cardData.id) > -1) {
          this.isSelect = true;
        } else {
          this.isSelect = false;
        }
      },
      immediate: true,
    },
  },

  mounted() {},

  methods: {
    fixStyle(val) {
      switch (val) {
      case 0:
        return 'orangeLabel';
      case 1:
        return 'buleLabel';
      case 2:
        return 'purpleLabel';
      case 3:
        return 'orangeLabel';
      default:
        return '';
      }
    },
    handlerCheck(item) {
      this.isSelect = !this.isSelect;
      this.$emit('stateChange', {cardObj: item, cardState: this.isSelect});
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrap-list {
  width: 48%;
  // height: 123px;
  padding: 12px;
  margin: 6px 0px;
  margin-right: 3%;
  font-size: 12px;
  box-sizing: border-box;
  background: #fcfcfc;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  text-align: left;
  color: #022643;
  line-height: 24px;
  &.listChecked {
    background: rgba(60, 199, 171, 0.1);
    border: 1px solid #3ac5aa;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rect {
      display: inline-block;
      width: 18px;
      height: 18px;
      background: #f4f6f6;
      border: 1px solid rgba(2, 38, 67, 0.3);
      border-radius: 2px;
      &:hover {
        border: 1px solid rgba(2, 38, 67, 1);
      }
      &.isSelect {
        background: #fff;
        border: 1px solid #3ac5aa;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          margin-top: 2px;
          margin-left: 6px;
          display: inline-block;
          width: 5px;
          height: 10px;
          border-color: #3cc7ab;
          border-style: solid;
          border-width: 0 1px 1px 0;
          transform: rotate(45deg);
        }
      }
    }
    > span {
      font-size: 16px;
      color: #022643;
      font-weight: 600;
    }
    .orangeLabel {
      display: inline-block;
      margin-left: 8px;
      padding: 0px 6px;
      background: #fcece2;
      color: #ff6000;
      border-radius: 2px;
    }
    .buleLabel {
      display: inline-block;
      margin-left: 8px;
      padding: 0px 6px;
      background: #e8f2f9;
      color: #39a3e1;
      border-radius: 2px;
    }
    .purpleLabel {
      display: inline-block;
      margin-left: 8px;
      padding: 0px 6px;
      background: #e1e7f7;
      color: #2b35e1;
      border-radius: 2px;
    }
  }
  .card-wrap-content-qi {
    .text-show {
      display: flex;
      div {
        span:first-child {
          opacity: 0.45;
        }
        span:last-child {
          margin-left: 8px;
          opacity: 1;
        }
      }
    }
  }
  .card-wrap-content-lo {
    .text-show {
      display: flex;
      div {
        width: 50%;
        span:first-child {
          opacity: 0.45;
        }
        span:last-child {
          margin-left: 8px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
