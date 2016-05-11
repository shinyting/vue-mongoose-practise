<template>
	<form class="form-horizontal">
		<div class="form-group">
			<label for="inputWord" class="col-sm-2 control-label">新词：</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="inputWord" placeholder="new word" v-model="word.name">
			</div>
		</div>
		<div class="form-group">
			<label for="inputMean" class="col-sm-2 control-label">释义：</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="inputMean" placeholder="mean" v-model="word.mean">
			</div>
		</div>
		<div class="form-group">
			<label for="inputOrigin" class="col-sm-2 control-label">出处：</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="inputOrigin" placeholder="origin" v-model="word.origin">
			</div>
		</div>
		<div class="form-group">
			<label for="inputSame" class="col-sm-2 control-label">近义词：</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="inputSame" placeholder="same" v-model="word.same">
			</div>
		</div>
		<div class="form-group">
			<label for="inputLabel" class="col-sm-2 control-label">标签：</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="inputLabel" placeholder="origin" v-model="word.label">
			</div>
		</div>
		<div class="form-group">
			<label for="inputRate" class="col-sm-2 control-label">使用频率</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="inputRate" placeholder="please enter 7 rates in a week split in ;" v-model="word.rate">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="button" class="btn btn-primary" @click="saveAdd(word)">add</button>
			</div>
		</div>
	</form>
</template>

<script>
  export default {
    data () {
      var word = {
        name: '',
        mean: '',
        origin: '',
        same: '',
        label: '',
        rate: ''
      }
      return {word: word}
    },
    methods: {
      saveAdd (word) {
        console.log(word)
        var params = {
          word: word.name,
          mean: word.mean,
          origin: word.origin,
          same: [],
          label: [],
          rate: []
        }
        this.$http({url: '/saveWord', params, method: 'post'}).then(function (response) {
          console.log(response)
        }, function (response) {
          console.log(response)
        })
      }
    }
  }
</script>