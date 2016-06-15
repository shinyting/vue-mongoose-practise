var User = require('../models/user.js');
var db = require('../db.js');

var express = require('express');
var router = express.Router();

//add user
var saveUser = function (req, res, next) {
	var user = new User(req.body);
	user.save(function (err, data) {
		if (!err) {
			res.send({
				'msg': 'success'
			})
		}
		else {
			res.send(404);
		}
	})
}

router.post('userRegister', saveUser);

module.exports = router;