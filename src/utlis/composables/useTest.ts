// 联合类型
const num: number | string = 'num联合类型'

console.log(num)

// 交叉类型
interface Pople {
  name: string
  age: number
}
interface Man {
  sex: number
}
function xm(man: Pople & Man): void {
  console.log(man)
}

xm({ name: 'xmnb', age: 12, sex: 1 })

// 类型断言

interface Foo {
  bar: number
  bas: string
}
const foo = {} as Foo

foo.bar = 123
foo.bas = 'hello'

/**
 *  范型
 */
function fx<T>(num: T) {
  console.log(num)
}
fx('123')

// 多类型
function fx2<T, U>(params: T, id: U): object {
  return { params, id }
}

const rfx2 = fx2<string, number>('多个参数', 5)

console.log(rfx2)

// 范型约束

interface Len {
  length: number
}

function getLength<T extends Len>(arg: T) {
  return arg.length
}

getLength([1, 2, 3])
