import { defineComponent, ref } from 'vue';
import style from './test.module.scss';

export default defineComponent(() => {
  const msg = ref('vue3中使用jsx,类似react写法');
  return () => (
    <div>
      <p class={style.green}>{msg.value}</p>
      <pre class="pre">{`import { defineComponent, ref } from 'vue';
import style from './test.module.scss';
export default defineComponent(() => {
  const msg = ref('vue3中使用jsx');
  return () => <div>
    <p class={style.green}>{msg.value}</p>
    <pre class={style.pre}>...</pre>
  </div>;
});`}</pre>
    </div>
  );
});
