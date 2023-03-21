<template>
  <button @click="request">请求</button>
</template>

<script>
export default {
  methods: {
    request() {
      this.$model.get('/test');
    },
  },
};
</script>
