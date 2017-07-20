学习typescript(二)

# ts 与 js 交互

## ts 调用 js
### module使用
分为两种情况：
1. `ts` 调用自己写的 `js`
2. `ts` 调用别人写的 `js` 也就通过 `npm` 安装的

第一种情况处理如下：
1. `tsconfig.json` 的 `compilerOptions` 中加入 `"allowJs": true` 选项
2. 在任何一个 `ts` 文件中加入 `declare function require(path: string): any;` , 使用 `require` 语法，例如：`const test = require('./test2')`
3. 另一个使用方法，直接使用 `ts` 的导入语法： `import test = require('./test2)`

第二种情况处理如下：
跟第一种方法类似进行处理。

### global
`node` 中有一个全局变量 `global` 和 `module.exports` 怎样使用呢？

解决方案：
在 `ts` 加入如下：
```typescript
declare var module: any;
declare var global: any;
```
就可以正常使用

## js 调用 ts
`js` 不能直接 `ts`，而 `ts` 能直接调用 `js`，`js` 能调用 `ts` 的编绎成果.
这其中关键是 `js` 与 `ts` 的模块系统编绎结果之间的问题。

```ts
// ts 语法
export const test1 = (x) => x + 1
// exports.test1 = (x) => x + 1  cmd

export default const test2 = (x) => x + 1
// export default const test2 => x => x + 1 es6 语法

// 注意： es6语法 import 是的 node 环境中无法使用的

export {
  foo as foo1,
  foo1 as foo2
}

// 上面等于 js 语法
// exports.foo1 = foo
// exports.foo2 = foo1

// 对 export 赋值
const f1 = () => console.log(1)
const f2 = () => console.log(1)
const f3 = () => console.log(1)

export = {
  f1,
  f2,
  f3
}

// 不过上面这种语法别的 `ts文件导入时需使用`

import ts = require('bluebird')

// es6
//exports = {
//  f1,
//  f2,
//  f3
// }

import daf from 'bluebird' // 这种语法只适合有 default 导出的方法

```

## 总结

`ts` 的语法是使用 `import from`，这个语法有独特的行为, 表现在会针对 `default` 进行处理。

1. 如果被导入的文件没有使用 `default`，那只能使用 `import * as from ` 语法
2. 如果被导入的文件使用了 `default`，`import xxx from` 语法就是把默认导出对象赋值给 `xxx`
3. `ts` 语法基本上跟 `es6` 的一致。
5. default 也能正常使用，但是与编绎结果与正常的 `js` 交互会有问题，因此不能使用 `default`。

所以， `ts` 模块系统使用原则：
1. 永远只在 `ts` 内部使用 `export default`
2. 在 `ts` 调用 `js` 时使用 `import * as XXX` 或者使用构析语法 `import {xxx} from '.xxx'`
3. `ts` 调用 `js` 时， 如果想使用 `js` 提示的话使用 `import` 语法
4. 如果不想使用提示，使用 `require` 语法。

`js` 使用原则：
1. 导出模块只这样使用 `module.exports`


[github测试库](https://github.com/htoooth/typescript-study)
