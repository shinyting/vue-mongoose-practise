# vue-mongoose-practise

> A Vue.js project
> mongodb to restore data

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


###使用vue-cli生成项目
$ npm install -g vue-cli
$ vue init webpack vue-mongoose-practise
$ cd vue-mongoose-practise
$ npm install
$ npm run dev
实际操作中在package.json中配置启动命令
该例中把dev 改为"start": "supervisor build/dev-server.js"
使用 npm start 启动项目

###static resource
bower init //初始化静态资源目录
bower install bootstrap --save //安装bootstrap
//引入静态资源
<link rel="stylesheet" type="text/css" href="/static/bower_components/bootstrap/dist/css/bootstrap.min.css">

###supervisor
npm install supervisor //监控后台代码，不用手动重启服务
supervisor build/dev-server.js

###indent
main.js router.map里各语句缩进必须是两个空格，否则会报错

###安装mongoose
npm install mongoose --save
连接mongoose的文件 db.js