<template>
  <h1>6.props TypeScript类型声明使用默认值</h1>
  <pre class="pre">{{`<div>\{\{props.msg\}\}</div>
  <div>\{\{props.labels.join(',')\}\}</div>
<script setup lang='ts'>
import {withDefaults, defineProps} from 'vue';

interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
});
</script>
`}}</pre>
  <div>{{ props.msg }}</div>
  <div>{{ props.labels.join(",") }}</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
  msg?: string;
  labels?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
});
</script>
