<template>
  <div class="my-select">
    <span @click="showPicker=true" class="select-label" :class="{'select-value' : value}">
      {{selectLalue || "全部" }}
      <van-icon class="select-icon" name="play" />
    </span>
    <van-popup :overlay="overlay" v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="_options" @cancel="onCancel" @confirm="onConfirm" @change='onChange' />
    </van-popup>
  </div>
</template>

<script>
export default {  
  name: 'FSelect',
  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => [
        {value: 1, label: '全部'},
        {value: 2, label: '所有'},
        {value: 3, label: '一无所有'},
      ],
    },
    value: {
      type: [String, Number],
      defualt: '',
    },
    label: {
      type: String,
      default: 'label',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  data() {
    return {
      showPicker: false,
    };
  },
  computed: {
    _options() {
      return this.options.map((i) => i.label);
    },
    selectLalue() {
      for (const item of this.options) {
        if (this.value === item.value) return item.label;
      }
      return '';
    },
  },
  methods: {
    onChange() {
      
    },
    onConfirm(value, index) {
      this.showPicker = false;
      this.$emit('input', this.options[index].value);
      this.$emit('on-confirm', this.options[index]);
    },
    onCancel() {
      this.showPicker = false;
      this.$emit('on-cancel');
    },
  },
};
</script>

<style lang="scss" scoped>
.my-select {
  font-size: 12px;
  padding: 2px 8px;
  background: rgba(216,216,216,0.40);
  border: 1px solid #959ca6;
  border-radius: 4px;
}
.select-icon {
  transform: rotateZ(90deg);
  margin-left: .1rem;
}
.select-label {
  display: flex;
}
// 选择后的样式
// .select-value {
//   font-family: PingFangSC-Medium;
//   font-size: 0.26rem;
//   color: #339dfb;
//   letter-spacing: -0.41px;
// }
</style>