// import { isArray } from '@vue/shared';
// const str:string = '这是一个字符串';
// console.log(str);

// const UNKNOWN:unknown = {};

// UNKNOWN.a = 123

// 重载函数

// function fn(param:number):void;
function fn(param1: string, param2: number): void
function fn(param1: any, param2: any): void {
  console.log(param1)
  console.log(param2)
}
fn('1', 2)

/**
 * 数组类型
 */

// 方式1(普通类型)
const arr1: Array<string | number> = []
console.log(arr1)

// 方式2(普通类型)
const arr2: number | string[] = []
console.log(arr2)

// 定义对象数组
interface arrType {
  name: string
  age?: number
}
const arr3: Array<arrType> = [
  { name: 'zhangsan', age: 15 },
  { name: 'lisi' },
]
console.log(arr3)

//
interface A {
  name: string
  age?: number // ?是选填的意思，可选操作符
  [propName: string]: any
}

const test: A = {
  name: '张三',
  age: 18,
  propName: 123,
}

console.log(test)

// 函数类型
const fun = function (num1: string, num2: string): string {
  return num1 + num2
}
const fun2 = fun('zhangsan', '100000')
console.log(fun2)

interface user {
  num1: string
  num2: string
}
const afun = function (user: user): user {
  return user
}
const afun2 = afun({
  num1: '1',
  num2: '2',
})
console.log(afun2)
