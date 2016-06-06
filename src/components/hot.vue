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
					<a @click="removeWord(item)" class="remove">删除</a>
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
    },
    methods: {
      removeWord: function (item) {
        this.$http.post('/removeWord', {id: item._id}).then(function (res) {
          console.log(res)
        }, function (res) {
          console.log(res)
        })
      }
    }
  }
</script>