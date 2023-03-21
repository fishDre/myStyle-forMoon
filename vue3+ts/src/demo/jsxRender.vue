<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('vue3中使用jsx');
    return () => (
      <div>
        <p class="yellow">{msg.value}</p>
        <pre class="pre">{`<script>
import { ref } from 'vue';
export default {
  setup() {
    const msg = ref('vue3中使用jsx');
    return () => <div>
      <p class="yellow">{msg.value}</p>
      <pre class="pre">code</pre>
    </div>;
  },
};
< /script>
<style lang="scss" scoped>
  .yellow{
    color:yellowgreen
  }
  .pre{
    color:wheat;
    text-align: left;
    padding:10px;
  }
</style>`}</pre>
      </div>
    );
  },
};
</script>
<style lang="scss" scoped>
.yellow {
  color: yellowgreen;
}
</style>
