<template>
  <div class="title-wrap">
    <div class="title-content">
      <span>{{ name }}</span>
      <div>
        <slot name="after"></slot>
      </div>
    </div>
    <slot>你好世界</slot>
  </div>
</template>

<script>
export default {
  name: 'FTitle',
  props: {
    name: {
      type: String,
      require: true,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.title-wrap {
  .title-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
      color: #303c4c;
      line-height: 14px;
      padding: 0px 8px;
      border-left: 2px solid #2b6ceb;
    }
  }
}
</style>
