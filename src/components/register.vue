<template>
	<div  class="col-sm-3 col-md-offset-4 login-box">
		<h1>注册辞汇</h1>
		<form>
			<div class="form-group">
				<label for="inputName">用户名：</label>
				<input type="text" class="form-control" id="inputName" placeholder="用户名" v-model="">
				<p class="col-sm-5 error-tip" v-if="">
					<i class="glyphicon glyphicon-info-sign"></i>
					错误
				</p>
			</div>
			<div class="form-group">
				<label for="inputNumber">手机号码：</label>
				<input type="text" class="form-control" id="inputNumber" placeholder="用户名" v-model="">
				<p class="col-sm-5 error-tip" v-if="">
					<i class="glyphicon glyphicon-info-sign"></i>
					错误
				</p>
			</div>
			<div class="form-group">
				<label for="inputEmail">邮箱：</label>
				<input type="text" class="form-control" id="inputEmail" placeholder="用户名" v-model="">
				<p class="col-sm-5 error-tip" v-if="">
					<i class="glyphicon glyphicon-info-sign"></i>
					错误
				</p>
			</div>
			<div class="form-group">
				<label for="inputPassword">密码：</label>
				<input type="text" class="form-control" id="inputPassword" placeholder="密码" v-model="">
				<p class="col-sm-5 error-tip" v-if="">
					<i class="glyphicon glyphicon-info-sign"></i>
					错误
				</p>
			</div>
			<div class="form-group">
				<label for="inputConfirmPassword">确认密码：</label>
				<input type="text" class="form-control" id="inputConfirmPassword" placeholder="确认密码" v-model="">
				<p class="col-sm-5 error-tip" v-if="">
					<i class="glyphicon glyphicon-info-sign"></i>
					错误
				</p>
			</div>
			<div class="form-group">
				<button type="button" class="btn btn-primary">Register</button>
			</div>
		</form>
	</div>
</template>