<template>
  <div>
      <div class="card-wrap">
        <div class="header">
          <span
            >当前列表(共{{ ListDataforPag.length }}条记录)(已选择{{
              checkList.length
            }})</span
          >
          <div class="right">
            <el-checkbox v-model="checkedNowPage">全选当前页</el-checkbox>
            <el-checkbox v-model="checkedAllPage">全选所有页</el-checkbox>
          </div>
        </div>
        <div class="card-scroll">
          <div class="card-content">
            <div v-if="ListDataforPag.length == 0" style="width: 100%">
              <el-empty :image-size="150"></el-empty>
            </div>
            <Card
              v-for="item in ListDataforPag"
              :key="item.id"
              :cardData="item"
              :checkListforAll="checkList"
              @stateChange="pushKpiState"
            >
              <!-- 企业清单 -->
              <div class="card-wrap-content-qi" v-if="title === 0">
                <p style="opacity: 0.45">
                  {{ item.enterpriseAddress }}
                </p>
                <div class="text-show">
                  <div>
                    <span>注册资本</span> <span>{{ item.capital }}</span>
                  </div>
                  <div style="margin-left: 16px">
                    <span>成立日期</span>
                    <span>{{ item.createDate | DataFormat }}</span>
                  </div>
                </div>
                <div class="text-show">
                  <div>
                    <span>所属行业</span>
                    <span> {{ item.industry | getIndustry }}</span>
                  </div>
                </div>
              </div>
              <!-- 楼宇清单 -->
              <div class="card-wrap-content-lo" v-if="title === 1">
                <p style="opacity: 0.45">
                  {{ item.address }}
                </p>
                <div class="text-show">
                  <div>
                    <span>楼宇类型</span>
                    <span>{{ item.buildingType | getBuildingType }}</span>
                  </div>
                  <div>
                    <span>楼宇信息完整度</span>
                    <span>{{ item.completeRate }}% </span>
                  </div>
                </div>
                <div class="text-show">
                  <div>
                    <span>楼宇入驻企业</span>
                    <span>{{ item.companyAmount }}</span>
                  </div>
                  <div>
                    <span>楼宇入驻企业立户率</span>
                    <span>{{ item.registeredRate }}% </span>
                  </div>
                </div>
                <div class="text-show">
                  <div>
                    <span>楼宇入库时间</span>
                    <span>{{ item.inDate | DataFormat }}</span>
                  </div>
                  <div>
                    <span>数据来源</span>
                    <span>{{ item.infoSource | getInfoSource }} </span>
                  </div>
                </div>
                <div class="text-show">
                  <div style="display: flex">
                    <div>
                      <span>企宽覆盖</span>
                      <span>{{ item.perfect | isTure }}</span>
                    </div>

                    <div>
                      <span>IDC覆盖</span>
                      <span>{{ item.idc | isTure }}</span>
                    </div>
                  </div>

                  <div>
                    <span>专线覆盖</span>
                    <span>{{ item.line | isTure }}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            small
            @current-change="handleSizeChange"
            layout="total, prev, pager, next, jumper"
            :total="total"
            :current-page="currentPage"
            :page-size="pageSize"
          >
          </el-pagination>
        </div>
      </div>
  </div>
</template>

<script>
// 要自己加载分页组件, 或者全局加载
import Card from './card.vue';
export default {
  name: 'WrapList',
  components: {
    Card,
  },
  data() {
    return {
      // 总条数
      total: 100,
      // 当前页
      currentPage: 1,
      // 每页数量
      pageSize: 10,
      // 选择的列表
      checkList: [],
      // 存储全选列表
      allListData: [],
      // 当前页选择的列表
      checkListNowPage: [],
      // 全选当前
      checkedNowPage: false,
      // 全选所有
      checkedAllPage: false,
      // 参数
      lisrParams: {},
      // 分页数据
      ListDataforPag: [],
    };
  },

  mounted() {},

  watch: {
    // 全选当前页
    checkedNowPage(val) {
      if (val) {
        this.checkedAllPage = false;
        // 处理异步计算属性
        this.$nextTick(() => {
          this.checkListNowPage = [];
          // 循环数据导入checkList并且去重
          this.checkList.push(...this.ListDataforPag.map((item) => item.id));
          const arr = this.checkList.slice();
          console.log('数据', arr);
          // 去重数据
          this.checkList = Array.from(new Set(arr));
          console.log('当前页的数据', this.checkList);
          this.checkListNowPage =
            this.ListDataforPag.map((item) => item.id) || [];

          // 判断此时是否全选,是则全选打钩
          if (this.checkList.length === this.allListData.length) {
            this.checkedAllPage = true;
          }
        });
      } else {
        if (this.checkListNowPage.length === this.ListDataforPag.length) {
          // 去掉当前页的数据
          this.checkList = this.checkList.filter(
            (val) => this.checkListNowPage.indexOf(val) === -1
          );
          this.checkListNowPage = [];
        }
      }
    },
    // 全选所有页
    checkedAllPage(val) {
      if (val) {
        this.checkListNowPage = [];
        this.checkedNowPage = false;
        this.checkList = this.allListData.slice(0);
      } else {
        if (this.checkList.length === this.allListData.length) {
          this.checkList = [];
          this.checkListNowPage = [];
        }
      }
    },
  },

  methods: {
    // 获取列表参数
    async gerParams(e) {
      try {
        this.loading = true;
        this.lisrParams = e;
        const params = {
          ...e,
          pageIndex: this.currentPage,
          pageSize: this.pageSize,
        };
        const {data, code} = await page(this.title, params);
        console.log('取到数据', data);
        if (code === 0) {
          if (data.data.length > 0) {
            const arr = data.data.map((item) => item.id);
            // 取当前页已经选择的列表
            this.checkListNowPage = this.checkList.filter(
              (val) => arr.indexOf(val) > -1
            );
            // 判断当前页的全选情况
            if (!this.checkedAllPage) {
              if (this.checkListNowPage.length === data.data.length) {
                this.checkedNowPage = true;
              } else {
                this.checkedNowPage = false;
              }
            }
          }
          this.ListDataforPag = data.data || [];
          // 楼宇企业参数返回不同
          this.allListData = data.allList || data.allBuildingList || [];
          this.total = data.totalCount;
          this.loading = false;
        }
      } catch (error) {
        this.ListDataforPag = [];
        this.allListData = [];
        this.loading = false;
      }
    },
    // 存储
    pushKpiState(kpitem) {
      console.log('出来', kpitem);
      if (kpitem.cardState) {
        this.checkList.push(kpitem.cardObj.id);
        this.checkListNowPage.push(kpitem.cardObj.id);
      } else {
        // this.checkedNowPage = false;
        // 取消选择删除
        this.checkList.forEach((item, index, arr) => {
          if (kpitem['cardObj'].id === item) {
            arr.splice(index, 1);
            return;
          }
        });
        // 当前页处理
        this.checkListNowPage.forEach((item, index, arr) => {
          if (kpitem['cardObj'].id === item) {
            arr.splice(index, 1);
            return;
          }
        });
      }
      console.log(this.checkListNowPage.length);
      // 自动根据条数判断当前页全选
      if (this.checkListNowPage.length === this.ListDataforPag.length) {
        this.checkedNowPage = true;
      } else {
        this.checkedNowPage = false;
      }
      // 自动根据条数判断所有页全选
      if (this.checkList.length === this.allListData.length) {
        this.checkedAllPage = true;
      } else {
        this.checkedAllPage = false;
      }
      console.log('选择的列表', this.checkList);
    },
     // 分页
    handleSizeChange(page) {
      this.currentPage = page;
      this.gerParams(this.lisrParams);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: inline-block;
  padding: 4px 0px;
  .goback {
    position: absolute;
    left: 4px;
    > li {
      font-size: 12px;
    }
  }
}
.buttonsCnt {
  border-top: 1px solid #97979720;
  margin-top: 20px;
  padding-top: 15px;
  text-align: center;
  line-height: 14px;
  font-size: 12px;
  .close.el-button {
    background: #fff;
    padding: 8px 16px;
    color: #022643;
  }
  .confirm.el-button {
    background: #3ac5aa;
    padding: 8px 16px;
    color: #fff;
  }
}
.card-wrap {
  margin-top: 20px;
  border-top: 1px solid rgba(151, 151, 151, 0.2);
  padding: 12px;
  /deep/.pagination {
    padding: 10px 0;
    text-align: right;
    margin-top: 10px;
    .btn-prev,
    .btn-next {
      border: 1px solid #5b798f80;
      border-radius: 4px;
      margin: 0 2px;
      color: #35516980;
      padding: 0;
    }
    .el-input.is-active .el-input__inner,
    .el-input__inner:focus {
      border: 1px solid #5b798f80;
    }
    .el-pager {
      .number {
        border: 1px solid #5b798f80;
        border-radius: 4px;
        margin: 0 2px;
        color: #35516980;
        font-weight: normal;
      }
      .number.active {
        border: 1px solid #3ac5aa;
        color: #3ac5aa;
      }
    }
  }
  > .header {
    display: flex;
    justify-content: space-between;
    > .right {
      margin-right: 10px;
    }
    > span {
      display: inline-block;
      padding: 0px 8px;
      border-left: 2px solid #3ac5aa;
      font-weight: 400;
      text-align: left;
      color: #022643;
      line-height: 12px;
    }
  }
  .card-scroll {
    overflow-y: auto;
    height: 275px;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    .card-content {
      display: flex;
      flex-wrap: wrap;
      > div:nth-child(even) {
        margin-right: 0px;
      }
    }
  }
}
</style>
