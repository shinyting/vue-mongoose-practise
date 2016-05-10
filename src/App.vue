<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="glyphicon glyphicon-time"></i>
                    Todo list
                </a>
                <ul class="nav navbar-nav">
                    <li>
                        <a v-link="'/home'">home</a>
                    </li>
                    <li>
                        <a v-link="'/time-entries'">list</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
                <sidebar :time="totalTime"></sidebar>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  export default {
    components: {
      'sidebar': Sidebar
    },
    data () {
      return {
        totalTime: 1.5
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
</script>