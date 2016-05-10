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
        {navText: '首页', link: '/home', isCur: true},
        {navText: '词汇录入', link: '/new', isCur: false},
        {navText: '所有词汇', link: '/all', isCur: false},
        {navText: '星标词汇', link: '/star', isCur: false},
        {navText: '热门词汇', link: '/hot', isCur: false}
      ]
      return {
        menus: menuArray
      }
    }
  }
</script>