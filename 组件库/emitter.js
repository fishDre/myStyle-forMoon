
// 上级向下级发送事件的方法
function broadcast(componentName, eventName, params){
  this.$children.forEach(child => {
    // 子组件的名字
    const name = child.$options.name;
    
    // 找到对应组件就触发$emit
    if (componentName === name)  {
      child.$emit.apply(child, [eventName].concat(params));
    }else{
      // 没有找到就递归调用该方法
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: {
    // 子向父级跨级传事件
     dispatch(componentName, eventName, params) {
        // 根节点边界情况
        let parent = this.$parent || this.$root;
        // 当前组件名
        let name = parent.$options.name;
        // 循环---- name !== componentName 为false循环结束找到目标组件
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;  // 根组件为啥不算进去
          // 非根节点一直向上走
          if(parent) {
            name = parent.$options.name;
          }
        }
        // 循环结束 --- parent是目标组件 或者不存在 (根组件)

        // 判断非根组件(为啥不把根组件算进去???)
        if(parent) {
           parent.$emit.apply(parent,[eventName].concat(params));
        }


     },
     broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
     }
  }
}
  
