var Word = require('../models/word');
var db = require('../db');
var wordsCollection = db.collection('words');

var express = require('express');
var router = express.Router();

//录入新词
var saveWord = function (req, res, next) {
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
	console.log(req);
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

var getWords = function (req, res, next) {
	wordsCollection.find({}).toArray(function (err, data) {
		if (!err) {
			console.log(data);
			res.send({
				msg: 'success',
				data: data
			});
		}
		else {
			res.send(404);
		}
	})
}

router.post('/words', saveWord);
router.post('/existWord', existWord);
router.get('/getWords', getWords);

module.exports = router;