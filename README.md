# egg-parameter

当前插件 [egg-parameter](https://github.com/inlym/egg-parameter) 是 egg.js 框架的官方插件 [egg-validate](https://github.com/eggjs/egg-validate) 的同构版本，如无特别需要，建议使用官方插件（egg-validate）。

## 比较

官方插件 egg-validate 不支持自定义返回错误响应体，只能返回 parameter 库校验后返回的错误内容，缺少灵活性，并且与笔者的实际业务需要的参数相悖，这是笔者重新开发这个插件的初衷。在使用层面上，当前插件兼容 egg-validate 的所有调用方式，同时在此基础上，增加了一些功能和扩展。

## 安装

```bash
$ npm i egg-parameter
```

## 配置

```js
// config/plugin.js
exports.validate = {
  enable: true,
  package: 'egg-parameter',
}
```

## 使用

实际上，当前插件做的工作只是将 [parameter](https://github.com/node-modules/parameter) 做了一层封装，挂载到了 app 和 ctx 上（你查看当前插件的源码后就可以发现这一点），所有的 API 均来源于 parameter。下面介绍基础使用方式，其他 API 建议直接查看 [parameter](https://github.com/node-modules/parameter) 文档。

```js
// 定义校验规则
const rule = {
  name: 'string',
  age: 'int',
  gender: ['male', 'female', 'unknow'],
}

// 在控制器中校验
ctx.validate(rule, ctx.requesy.body)
```
