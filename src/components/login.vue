<template>
	<div  class="col-sm-3 col-md-offset-4 login-box">
		<h1>登录辞汇</h1>
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
				<label for="inputPassword">密码：</label>
				<input type="text" class="form-control" id="inputPassword" placeholder="密码" v-model="">
				<p class="col-sm-5 error-tip" v-if="">
					<i class="glyphicon glyphicon-info-sign"></i>
					错误
				</p>
			</div>
			<div class="form-group">
				<button type="button" class="btn btn-primary">Login</button>
			</div>
		</form>
	</div>
</template>