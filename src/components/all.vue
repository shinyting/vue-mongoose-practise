<template>
	<div>this is all word page</div>
	<table class="table">
		<thead is="table-header"></thead>
		<tbody>
			<tr v-for="item in words">
				<td v-for="data in item">{{data}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
  import tableHeader from './table-header'
  export default {
    components: {
      tableHeader
    },
    data () {
      return {
        words: []
      }
    },
    ready: function () {
      this.$http.get('/getWords').then(function (res) {
        this.$set('words', res.data.data)
        console.log(res)
      }, function (res) {
        console.log(res)
      })
    },
    methods: {
      getdata: function () {
        // this.$http.get('/getWords', function (res, err) {
        //   console.log(res)
        // })
      }
    }
  }
</script>