<template>
  <div class="page_box">
    <slot></slot>
    <div class="page_box_bottom">
     <el-pagination
        background
        prev-text='上一页'
        next-text='下一页'
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.currentPage"
        :page-size="pageData.pageSize"
        layout="prev, pager, next ,slot"
        :total="total">
        <template>
          <div class="inner_button">
             到
            <input type="number" v-model.number="jumNum" >
             页
            <input type="button" value="确定" @click="handleJump">
          </div>
        </template>
     </el-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Pagination} from 'element-ui';
Vue.use(Pagination);
export default {
  name: 'PageBox',
  props:{
    'total':Number,
    'pageData':{
      type: Object,
      default: ()=> {
        return {
          currentPage: 1,
          pageSize:8
        }
      }
         
      },
  },
  data() {
    return {
      jumNum:'',
    };
  },

  mounted() {
    
  },

  methods: {
    handleSizeChange() {
      

    },
    handleCurrentChange(val) {
      this.pageData.currentPage = val;
      this.$emit('page-change',this.pageData)
    },
    handleJump() {
      console.log(this.jumNum);
      this.jumNum = parseInt(this.jumNum,10);
      this.pageData.currentPage = this.jumNum;
      this.$emit('page-change',this.pageData)
    }
    
  },
};
</script>

<style lang="scss" scoped>
.page_box_bottom {
  height: 90px;
  padding: 30px;
  .el-pagination {
    float: right;
    font-size: 14px;
    .inner_button {
      margin-left: 5px;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      color: #666666;
      font-weight: normal;
      text-align: right;
      line-height: 28px;
      height: 28px;
      input[type="button"] {
        width: 72px;
        margin-left: 5px;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 27px;
        height: 27px;
        background: #2892FF;
      }
       input[type="number"] {
        width: 48px;
        height: 30px;
        margin: 0px 5px;
        background: #F5F5F5;
        text-align: center;
        border: none;
        border-radius: 2px;
        font-size: 14px;
        line-height: 28px;
        height: 28px;
        &:focus-visible {
          border: red;
          outline: none;
        }
      }

    }

  }

}
</style>
<style lang="scss">
.page_box_bottom {
  .btn-prev {
     width: 72px;
  }
  .btn-next {
     width: 72px;
  }
}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }

</style>