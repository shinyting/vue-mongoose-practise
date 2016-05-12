var Word = require('../models/word');
var db = require('../db');
var wordsCollection = db.collection('word');

var express = require('express');
var router = express.Router();

//录入新词
var saveWord = function (req, res, next) {
	console.log(req);
	var word = new Word(req.query);
	console.log(req.query);
	word.save(function (err, data) {
		if (!err) {
			res.send({
				'msg': 'success'
			});
		}
		else {
			res.send(404)
		}
	});
}

var existWord = function (req, res, next) {
	var checkedWord = req.query;
	console.log(req.body);
	wordsCollection.findOne({word: req.query.word}, function (err, data) {
		if (!err) {
			if (data) {
				res.send({
					'msg': 'the word exist'
				});
			}
			else {
				res.send({
					'msg': 'no such word'
				});
			}
		}
		else {
			res.send(404);
		}
	})
}

router.post('/words', saveWord);
router.post('/existWord', existWord);

module.exports = router;