<template>
  <h1>3.setUp中使用</h1>
  <p class="p">state</p>
  <pre class="pre">{{`
<div>\{\{store.state.b\}\}</div>
<div>\{\{a\}\}</div>
<script setup lang='ts'>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const a = computed(() => store.state.a);
</script>
`}}</pre>
  <!-- <div>{{store.state.b}}</div>
  <div>{{a}}</div> -->
  <p class="p">getter</p>
  <pre class="pre">{{`
<div>\{\{ab\}\}</div>
<script setup lang='ts'>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const ab = computed(() => store.getters.getAB);
</script>
`}}</pre>
  <!-- <div>{{ab}}</div> -->
  <p class="p">Mutatoins 和 Actions</p>
  <pre class="pre">{{`
<button @click="increment(10)">increment</button>
<button @click="incrementAsync(20)">incrementAsync</button>
<div>\{\{a\}\}</div>

<script setup lang='ts'>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  const store = useStore();
  const a = computed(() => store.state.a);
  const increment = (playload) => store.commit('increment', playload);
  const incrementAsync = (playload) => store.dispatch('incrementAsync', playload);
</script>
`}}</pre>
  <!-- <button @click="increment(10)">increment</button>
<button @click="incrementAsync(20)">incrementAsync</button>
<div>{{a}}</div> -->
</template>

<script setup lang="ts">
// import { useStore } from 'vuex';
// import { computed } from 'vue';

// const store = useStore();
// const a = computed(() => store.state.a);
// const ab = computed(() => store.getters.getAB);
// const increment = (playload) => store.commit('increment', playload);
// const incrementAsync = (playload) => store.dispatch('incrementAsync', playload);
</script>
