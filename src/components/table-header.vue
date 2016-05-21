<template>
	<thead>
		<tr>
			<th v-for="head in listHead">{{head}}</th>
		</tr>
	</thead>
</template>

<script>
  export default {
    data () {
      return {listHead: ['编号', '名称', '释义', '出处', '是否星标', '使用频率', '标签', '近义词', '未知属性', '操作']}
    }
  }
</script>