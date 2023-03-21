<template>
  <div>
    <ul class="catalogue">
      <p>目录</p>
      <li v-for="(item,idx) in items" :key="idx" @click="goH1(idx)">{{item}}</li>
    </ul>
    <store />
    <options />
    <composition />
  </div>
</template>

<script setup lang="ts">
import store from './store.vue';
import options from './options.vue';
import composition from './composition.vue';
import useCatalogue from '../setUp/useCatalogue';

const {items, goH1} = useCatalogue();
</script>
