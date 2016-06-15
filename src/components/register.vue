<template>
	<div  class="col-sm-3 col-md-offset-4 login-box">
		<h1>注册辞汇</h1>
		<form>
			<div class="form-group">
				<label for="inputName">用户名：</label>
				<input type="text" class="form-control" id="inputName" placeholder="用户名" v-model="user.name.text">
				<p class="col-sm-5 error-tip" v-if="!user.name.valid">
					<i class="glyphicon glyphicon-info-sign"></i>
					{{user.name.errorTip}}
				</p>
			</div>
			<div class="form-group">
				<label for="inputNumber">手机号码：</label>
				<input type="text" class="form-control" id="inputNumber" placeholder="手机号码" v-model="user.number.text">
				<p class="col-sm-5 error-tip" v-if="!user.number.valid">
					<i class="glyphicon glyphicon-info-sign"></i>
					{{user.number.errorTip}}
				</p>
			</div>
			<div class="form-group">
				<label for="inputEmail">邮箱：</label>
				<input type="text" class="form-control" id="inputEmail" placeholder="邮箱" v-model="user.mail.text">
				<p class="col-sm-5 error-tip" v-if="!user.mail.valid">
					<i class="glyphicon glyphicon-info-sign"></i>
					{{user.mail.errorTip}}
				</p>
			</div>
			<div class="form-group">
				<label for="inputPassword">密码：</label>
				<input type="text" class="form-control" id="inputPassword" placeholder="密码" v-model="user.password.text">
				<p class="col-sm-5 error-tip" v-if="!user.password.valid">
					<i class="glyphicon glyphicon-info-sign"></i>
					{{user.password.errorTip}}
				</p>
			</div>
			<div class="form-group">
				<label for="inputConfirmPassword">确认密码：</label>
				<input type="text" class="form-control" id="inputConfirmPassword" placeholder="确认密码" v-model="user.confirmPassword.text">
				<p class="col-sm-5 error-tip" v-if="!user.confirmPassword.valid">
					<i class="glyphicon glyphicon-info-sign"></i>
					{{user.confirmPassword.errorTip}}
				</p>
			</div>
			<div class="form-group">
				<button type="button" class="btn btn-primary">Register</button>
			</div>
		</form>
	</div>
</template>

<script>
  export default {
    data () {
      var user = {
        name: {text: '', valid: true, errorTip: ''},
        number: {text: '', valid: true, errorTip: ''},
        mail: {text: '', valid: true, errorTip: ''},
        password: {text: '', valid: true, errorTip: ''},
        confirmPasswrod: {text: '', valid: true, errorTip: ''}
      }
      return {user: user}
    }
  }
</script>