<template>
	<h3>this is all word page</h3>
	<table class="table">
		<thead is="table-header"></thead>
		<tbody>
			<tr v-for="item in words">
				<td v-for="data in item">{{data}}</td>
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