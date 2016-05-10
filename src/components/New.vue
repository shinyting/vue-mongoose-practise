<template>
		<form class="form-horizontal">
				<div class="form-group">
						<label for="inputWord" class="col-sm-2 control-label">新词：</label>
						<div class="col-sm-10">
								<input type="text" class="form-control" id="inputWord" placeholder="new word">
						</div>
				</div>
				<div class="form-group">
						<label for="inputMean" class="col-sm-2 control-label">释义：</label>
						<div class="col-sm-10">
								<input type="text" class="form-control" id="inputMean" placeholder="mean">
						</div>
				</div>
				<div class="form-group">
						<label for="inputOrigin" class="col-sm-2 control-label">出处：</label>
						<div class="col-sm-10">
								<input type="text" class="form-control" id="inputOrigin" placeholder="origin">
						</div>
				</div>
				<div class="form-group">
						<label for="inputSame" class="col-sm-2 control-label">近义词：</label>
						<div class="col-sm-10">
								<input type="text" class="form-control" id="inputSame" placeholder="same">
						</div>
				</div>
				<div class="form-group">
						<label for="inputLabel" class="col-sm-2 control-label">标签：</label>
						<div class="col-sm-10">
								<input type="text" class="form-control" id="inputLabel" placeholder="origin">
						</div>
				</div>
				<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
								<button type="button" class="btn btn-primary">add</button>
						</div>
				</div>
		</form>
</template>