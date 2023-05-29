/* 
* 无法找到模块“js-cookie”的声明文件。“./js-cookie/index.js”隐式拥有 "any" 类型。
* 尝试使用 `npm i --save-dev @types/js-cookie`(如果存在)
* 或者添加一个包含 `declare module 'js-cookie';` 的新声明(.d.ts)文件ts
*/

// declare module 'js-cookie'

// 下面这种类型声明未完成

// declare module 'js-cookie' {
//   interface Cookie {
//     set(key:string, value: string, attributes?: any):void
//     remove(key:string):void
//   }
//   const cookie:Cookie;
//   export default cookie;
// }