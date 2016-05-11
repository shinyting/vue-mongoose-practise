var Word = require('../models/word');

var express = require('express');
var router = express.Router();

//录入新词
var saveWord = function (req, res, next) {
	var word = new Word(req.body);
	word.save(function (err, data) {
		if (!err) {
			res.send({
				'msg': 'success'
			});
		}
	});
}

router.post('/saveWord', saveWord);

module.exports = router;