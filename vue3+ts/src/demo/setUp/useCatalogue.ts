import { ref, onMounted, Ref } from 'vue';

type CatalogueType = () => {
  items:Ref<Array<string>>;
  goH1?:any;
};

let H1:Array<any>;
const useCatalogue:CatalogueType = () => {
  const items = ref(['']);
  onMounted(() => {
    // dom接口获取页面上所有标题一遍生成目录
    H1 = [...document.getElementsByTagName('h1')];
    items.value = H1.map((i) => i.innerText);
  });

  const goH1 = (index) => {
    H1[index].scrollIntoView();
  };

  return {
    items,
    goH1
  };
};

export default useCatalogue;
