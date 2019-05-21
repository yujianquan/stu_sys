# stu_sys

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Problems what I meet when I build this project

SASS的安装问题：npm install node-sass --save 会下载不到文件需要翻墙，此时需要安装淘宝镜像重新cnpm install node-sass --save，实在不行使用npm i node-sass

SASS使用变量，在calc里面不能使用的问题:例如不能calc(100% - $params),使用calc(100% - #{$params})
