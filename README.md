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


###static resource
bower init //初始化静态资源目录
bower install bootstrap --save //安装bootstrap
//引入静态资源
<link rel="stylesheet" type="text/css" href="/static/bower_components/bootstrap/dist/css/bootstrap.min.css">

###supervisor
npm install supervisor //监控后台代码，不用手动重启服务
supervisor build/dev-server.js