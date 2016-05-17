<template>
	<div>this is star page</div>
	<table class="table">
		<thead is="table-header"></thead>
		<tbody>
			<tr v-for="item in starWords">
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
      return {starWords: {}}
    },
    ready: function () {
      this.$http.get('/getStarWords').then(function (res) {
        console.log(res)
        this.$set('starWords', res.data.data)
      }, function (res) {
        console.log(res)
      })
    }
  }
</script>