<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-6">
				<label>date</label>
				<input type="date" class="form-control" v-model="timeEntry.date" placeholder="Date" />
			</div>
			<div class="col-sm-6">
				<label>time</label>
				<input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="Hours">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>comment</label>
				<input type="text" class="form-control" v-model="timeEntry.comment" placeholder="Comment" />
			</div>
		</div>
		<button class="btn btn-primary" @click="save()">save</button>
		<button v-link="'/time-entries'" class="btn btn-danger">cancel</button>
		<hr>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        timeEntry: {
          user: {
            name: 'erzhe',
            email: 'zhangting20.90@163.com',
            image: 'https://github.com/shinyting/myResume/blob/master/resume.jpg'
          }
        }
      }
    },
    methods: {
      save () {
        let timeEntry = this.timeEntry
        this.$dispatch('timeUpdate', timeEntry)
        this.timeEntry = {}
      }
    }
  }
</script>