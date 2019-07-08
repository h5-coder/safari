# 项目

> A Vue.js template project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##### 开发环境端口

见[webpack配置文件index.js](./config/index.js)中的`dev.port`,默认值为`8081`;

## 技术栈

## Eslint

##### 开关

`config/index.js`中`config.dev.useEslint`的值
- `true`为开启Eslint代码检查
- `false`为关闭Eslint代码检查


##### 规则

见:[.eslintrc.js](./.eslintrc.js)
