<template>
	<h3>每日一词</h3>
	<p>
		{{commend.text}}
	</p>
	<p>
		<span class="badge">introduction:</span>
		{{commend.intro}}
	</p>
	<p>
		<span class="badge">time</span>
		{{commend.time}}
	</p>
</template>

<script>
  export default {
    data () {
      var commend = {
        text: 'jianjia',
        intro: 'guciguci',
        time: '2016-05-10'
      }
      return {
        commend: commend
      }
    }
  }
</script>