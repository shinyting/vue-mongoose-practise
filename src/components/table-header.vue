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
      return {listHead: ['编号', '名称', '释义', '出处', '近义词', '标签', '使用频率', '是否星标']}
    }
  }
</script>