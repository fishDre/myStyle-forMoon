// 普通json对象类型声明
export type json1 = {
  key1: string;
  key2: number;
};

// 复杂对象类型声明
export type Person = {
  readonly id: number; // 只读属性，只有初始化才赋值
  name?: string; // 可选
  age: number;
  [propName: string]: any; // 任意类型属性
};

export interface Person2 {
  readonly id: number; // 只读属性，只有初始化才赋值
  name?: string; // 可选
  age: number;
  [propName: string]: any; // 任意类型属性
}

// 联合类型声明
export type StringNumber = string | number;

// 枚举类型
export type Enum = 'A' | 'B' | 'C';

// 函数类型
// eslint-disable-next-line no-unused-vars
export type funType = (x: number, y: number) => number;

export interface funType2 {
  // eslint-disable-next-line no-unused-vars
  (x: string, y: string): string;
}
