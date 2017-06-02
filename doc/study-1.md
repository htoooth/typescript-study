学习typescript(一)

# 环境
## 必装软件
1. node，推荐 node 8.0
2. npm，推荐 npm 5.0
3. git, 最新版
4. vscode, 编绎器

## 必装包
1. tsc: `npm install -g typescript`
2. typings: `npm install -g typings`
3. ts-node: `npm install -g ts-node`

## 说明一下
1. tsc 为 typescript 的编绎绎，它能把 typescript 编绎成 js。
2. typings 为下截别人标好的类型说明。
3. ts-node 为开发环境中不用编绎成 js 直接运行 typescript 环境。

# 如何使用
## 新项目，这里指的项目都使用typecript进行开发

1. 新建文件夹：'mkdir ts-test && cd ts-test`。
2. 初始化 `node` 项目：`npm init`。
3. 设置初始化 'tsc --init'，会生成一个 `tsconfig.json` 文件，这个文件很重要，就是 `tsc` 的配置文件，内容下面会说。
4. 运行版本控制：'git init'，`git add -A`, `git commit -m "init"`。
3. 新建一个文件 `test.ts` 文件
```typescript
console.log('hello, world');
```
4. 运行命令：`tsc test.ts`，编绎文件，生成文件会在当前文件夹生成 `test.js`。
5. 运行命令： `node test.js` ，你会看见 `hello, world`。

这样一个小小的环境就建起来了，现在我们考虑下优化一下它。

1. 在项目中，要控制生成文件的目录
这个需要在 `tsconfig.json` 中的 `compilerOption` 中添加 `"outDir": "dist"`，然后运行命令: `tsc`，`tsc`会自动加载 `tsconfig.json`。这样就会在当前目录下生成 `dist/test.js`，如果不加这行运行命令，跟 `tsc test.ts` 的效果是一致的。

2. 在项目中，会控制 `.ts` 文件的目录和不需要编绎文件的目录
如果，不设置这两个选项，运行 `tsc` 命令后，当前所有文件夹下的文件，当你的 `node_modules` 很大的时候，这样非常慢。因此需要指定需要的目录和不需要的目录，在 `tsconfig.json` 中增加 `include` 和 `exclude` 选项，这两个选项为数组，如下：

```typescript
    "exclude": [
        "node_modules/",
        "dist/"
    ],
    "include": [
        "src/**/*.ts" // 这里 /**/的意思为任何一个子目录的 `*.ts` 文件
    ]
```

3. 开发项目中编绎 `.ts` 文件太麻烦，能不能直接运行
现在就是 `ts-node` 发挥作用的时候，简单的把 `node` 换成 `ts-node` 就可以了。例如： `ts-node src/test2.ts`

4. 如何引用 `npm` 上面的库？
这里会有问题，`node` 中加载库的标准是 `cmd` , 实现是 `require`。这在 `ts` 中不支持，解决这个问题有两个方案：
第一方案：
在项目中任何一个 `.ts` 中增加如下语句：
```typescript
declare function require(path: string): any;
```
这样你可以自由的使用 `require`

第二方案：
使用 `ts` 自已的导入库的语法。
```typescript
import foo = require("foo");
```

注：
我是 `cmd` 的支持者，我认为 `es6` 中 `import` 不支持动态导入是一个大问题。

## 已有一个 js 项目，如何体验 typescript
主要解决问题，ts 与 js 的交互问题？

这是下篇文篇的想说的问题。

[github测试库](https://github.com/htoooth/typescript-study)

