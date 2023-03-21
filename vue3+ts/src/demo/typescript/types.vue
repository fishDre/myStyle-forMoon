<template>
  <h1>1.类型定义</h1>
  <pre class="pre">{{ code }}</pre>
  <a href="http://ts.xcatliu.com/introduction/index.html">更多内容</a>
</template>

<script setup lang="ts">
const code = `
const a: string = '字符串'; // 基础类型 string,number,boolean,undefined,null,any,void

const aRef: Ref<string> = ref('字符串');// setup中基础类型的ref

const array: number[] // 数组类型

const array: Array<number> // 数组类型



//其他复杂的类型，请看src/unit/types.ts


// 普通json对象类型声明
export type json1 = {
  key1:string;
  key2:number;
};

// 复杂对象类型声明
export type Person = {
  readonly id: number; // 只读属性，只有初始化才赋值
  name?:string;// 可选
  age:number;
  [propName: string]: any;// 任意类型属性
}

export interface Person2 {
  readonly id: number; // 只读属性，只有初始化才赋值
  name?:string;// 可选
  age:number;
  [propName: string]: any;// 任意类型属性
}

// 联合类型声明
export type StringNumber = string | number;

// 自定义options类型
export type Enum = 'A' | 'B' | 'C';

// 函数类型
// eslint-disable-next-line no-unused-vars
export type funType = (x: number, y: number) => number;

export interface funType2 {
  // eslint-disable-next-line no-unused-vars
  (x: string, y: string): string;
}



`;
</script>

<style lang="scss" scoped></style>
