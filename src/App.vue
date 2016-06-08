<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <i class="glyphicon glyphicon-time"></i>
                    Word list
                </a>
                <ul class="nav navbar-nav">
                    <li v-for="menu in menus">
                        <a v-link="menu.link">{{menu.navText}}</a>
                    </li>
                </ul>
                <div class="pull-right mgt15">
                    <a v-link="{path: 'login'}">登录</a>
                    <a href="#">注册</a>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      var menuArray = [
        {navText: '首页', link: '/home'},
        {navText: '词汇录入', link: '/new'},
        {navText: '所有词汇', link: '/all'},
        {navText: '星标词汇', link: '/star'},
        {navText: '热门词汇', link: '/hot'}
      ]
      return {
        menus: menuArray
      }
    }
  }
</script>