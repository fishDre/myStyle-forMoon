<template>
  <h1>2.常规使用</h1>
  <p class="p">state</p>
  <pre class="pre">{{`
<div>state a:\{\{$store.state.a\}\}</div>
<div>state b:\{\{$store.state.b\}\}</div>
  `}}</pre>
  <!-- <div>state a:{{$store.state.a}}</div>
  <div>state b:{{$store.state.b}}</div> -->
  <p class="p">getter</p>
  <pre class="pre">{{`
import {mapGetters} from 'vuex';

export default {
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['getAB'])
  }
};

<div>state ab:\{\{getAB\}\}</div>
  `}}</pre>
  <!-- <div>{{getAB}}</div> -->
  <p class="p">Mutation</p>
  <pre class="pre">{{`
<button @click="test">increment</button>

export default {
  motheds: {
    test() {
      this.$store.commit('increment', 10);
    }
  }
};

// mapMutations
<button @click="increment(5)">increment</button>

import { mapMutations } from 'vuex'

export default {
  motheds: {
    ...mapMutations([
      'increment'
    ])
  }
};

  `}}</pre>
  <!-- <button @click="increment(5)">increment</button>
  <div>{{$store.state.a}}</div> -->
  <p class="p">Actions</p>
  <pre class="pre">{{`
<button @click="testAsync">increment</button>
export default {
  methods: {
    testAsync() {
      this.$store.dispatch('incrementAsync', 20);
    }
  }
};

// mapActions
<button @click="incrementAsync(30)">increment</button>

export default {
  methods: {
    ...mapActions([
      'incrementAsync'
    ])
  }
};
`}}</pre>
  <!-- <button @click="incrementAsync(30)">increment</button>
<div>{{$store.state.a}}</div> -->
</template>

<script>
// import {mapActions, mapGetters, mapMutations} from 'vuex';

// export default {
//   computed: {
//   // 使用对象展开运算符将 getter 混入 computed 对象中
//     ...mapGetters(['getAB'])
//   },
//   methods: {
//     ...mapMutations([
//       'increment'
//     ]),
//     test() {
//       this.$store.commit('increment', 10);
//     },
//     testAsync() {
//       this.$store.dispatch('incrementAsync', 20);
//     },
//     ...mapActions([
//       'incrementAsync'
//     ])
//   }
// };
</script>
