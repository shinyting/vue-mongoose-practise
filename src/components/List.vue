<template>
  	<ul class="list-unstyled">
    		<li v-for="item in lists" class="clearfix">
      			<p class="pull-left">{{item.text}}</p>
      			<p class="pull-right">{{item.time}}</p>
    		</li>
  	</ul>
</template>

<script>
  export default {
    data () {
      var larray = [
        {text: 'description', time: '2012-09-23'},
        {text: 'none', time: '2016-07-12'}
      ]
      return {
        lists: larray
      }
    }
  }
</script>