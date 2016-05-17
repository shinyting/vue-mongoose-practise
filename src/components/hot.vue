<template>
	<div>this is hot page</div>
	<table class="table">
		<thead is="table-header"></thead>
		<tbody>
			<tr v-for="item in hotWords">
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
      return {hotWords: {}}
    },
    ready: function () {
      this.$http.get('/getHotWords').then(function (res) {
        console.log(res)
        this.$set('hotWords', res.data.data)
      }, function (res) {
        console.log(res)
      })
    }
  }
</script>