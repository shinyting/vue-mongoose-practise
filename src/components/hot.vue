<template>
	<h3>this is hot page</h3>
	<table class="table">
		<thead is="table-header"></thead>
		<tbody>
			<tr v-for="item in hotWords">
				<td v-for="data in item">
					{{data}}
				</td>
				<td>
					<a v-link = "{path: 'new?' + item._id}">编辑</a>
					<a href="#">删除</a>
				</td>
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