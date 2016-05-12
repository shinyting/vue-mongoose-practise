<template>
	<form class="form-horizontal">
		<div class="form-group">
			<label for="inputWord" class="col-sm-2 control-label">新词：</label>
			<div class="col-sm-5">
				<input type="text" class="form-control" id="inputWord" placeholder="new word" v-model="word.name.text" @blur="checkInput(word.name, 'name')">
			</div>
			<p class="col-sm-5 error-tip" v-if="!word.name.valid">
				<i class="glyphicon glyphicon-info-sign"></i>
				{{word.name.errorTip}}
			</p>
		</div>
		<div class="form-group">
			<label for="inputMean" class="col-sm-2 control-label">释义：</label>
			<div class="col-sm-5">
				<textarea class="form-control" id="inputMean" placeholder="mean" v-model="word.mean.text" @blur="checkInput(word.mean, 'mean')"></textarea>
			</div>
			<p class="col-sm-5 error-tip" v-if="!word.mean.valid">
				<i class="glyphicon glyphicon-info-sign"></i>
				{{word.mean.errorTip}}
			</p>
		</div>
		<div class="form-group">
			<label for="inputOrigin" class="col-sm-2 control-label">出处：</label>
			<div class="col-sm-5">
				<input type="text" class="form-control" id="inputOrigin" placeholder="origin" v-model="word.origin.text" @blur="checkInput(word.origin, 'origin')">
			</div>
			<p class="col-sm-5 error-tip" v-if="!word.origin.valid">
				<i class="glyphicon glyphicon-info-sign"></i>
				{{word.origin.errorTip}}
			</p>
		</div>
		<div class="form-group">
			<label for="inputSame" class="col-sm-2 control-label">近义词：</label>
			<div class="col-sm-5">
				<input type="text" class="form-control" id="inputSame" placeholder="same" v-model="word.same.text" @blur="checkInput(word.same, 'same')">
			</div>
			<p class="col-sm-5 error-tip" v-if="!word.same.valid">
				<i class="glyphicon glyphicon-info-sign"></i>
				{{word.same.errorTip}}
			</p>
		</div>
		<div class="form-group">
			<label for="inputLabel" class="col-sm-2 control-label">标签：</label>
			<div class="col-sm-5">
				<input type="text" class="form-control" id="inputLabel" placeholder="label" v-model="word.label.text" @blur="checkInput(word.label, 'label')">
			</div>
			<p class="col-sm-5 error-tip" v-if="!word.label.valid">
				<i class="glyphicon glyphicon-info-sign"></i>
				{{word.label.errorTip}}
			</p>
		</div>
		<div class="form-group">
			<label for="inputRate" class="col-sm-2 control-label">使用频率</label>
			<div class="col-sm-5">
				<input type="text" class="form-control" id="inputRate" placeholder="please enter 7 rates in a week split in space" v-model="word.rate.text" @blur="checkInput(word.rate, rate)">
			</div>
			<p class="col-sm-5 error-tip" v-if="!word.rate.valid">
				<i class="glyphicon glyphicon-info-sign"></i>
				{{word.rate.errorTip}}
			</p>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-5">
				<button type="button" class="btn btn-primary" @click="saveAdd(word)">add</button>
			</div>
		</div>
	</form>
</template>

<script>
  export default {
    data () {
      var word = {
        name: {text: '', valid: true, errorTip: ''},
        mean: {text: '', valid: true, errorTip: ''},
        origin: {text: '', valid: true, errorTip: ''},
        same: {text: '', valid: true, errorTip: ''},
        label: {text: '', valid: true, errorTip: ''},
        rate: {text: '', valid: true, errorTip: ''}
      }
      return {word: word}
    },
    methods: {
      saveAdd (word) {
        var params = {
          word: word.name.text,
          mean: word.mean.text,
          origin: word.origin.text,
          same: word.same.text.split(' '),
          label: word.label.text.split(' '),
          rate: word.rate.text.split(' ')
        }
        this.$http.post('/words', params, function (res) {
          console.log(res)
        })
      },
      checkInput (params, string) {
        this.$http.get('/getWords', function (res) {
          console.log(res)
        })
        if (!params.text) {
          params.valid = false
          params.errorTip = 'please fill this information correctly'
        } else {
          params.valid = true
        }
        if (string === 'name') {
          var obj = {word: params.text}
          this.$http.post('/existWord', obj, function (res) {
            console.log(res)
          })
        }
      }
    }
  }
</script>