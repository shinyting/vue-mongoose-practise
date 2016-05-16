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
	<button type="button" @click="getdata()"></button>
</template>

<script>
  import tableHeader from './table-header'
  export default {
    components: {
      tableHeader
    },
    data () {
      return {
        // $.get('/getWords', function (res, err) {
        //   console.log(res)
        // })
        words: [
          {
            id: 1,
            name: '祈福',
            mean: '向神祷告求福',
            origin: '礼记',
            rate: [0.2, 0.5, 0.7, 0.6, 0.02, 0.07, 0.1],
            label: ['盼望'],
            same: ['祈祷', '祈愿'],
            stared: true
          },
          {
            id: 2,
            name: '潜伏',
            mean: '向神祷告求福',
            origin: '礼记',
            rate: [0.2, 0.5, 0.7, 0.6, 0.02, 0.07, 0.1],
            label: ['盼望'],
            same: ['祈祷', '祈愿'],
            stared: false
          }
        ]
      }
    },
    methods: {
      getdata: function () {
        // $.get('/getWords', function (res, err) {
        //   console.log(res)
        // })
      }
    }
  }
</script>