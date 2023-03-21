<template>
  <h1>3.常用api</h1>
  <pre class="pre">{{
    `
$model.get(url[, config])
$model.get('url', {
  params: {
    ID: 12345
  }
})

$model.delete(url[, config])
$model.head(url[, config])
$model.options(url[, config])
$model.post(url[, data[, config]])
$model.put(url[, data[, config]])
$model.patch(url[, data[, config]])

`
  }}</pre>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
