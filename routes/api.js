var Word = require('../models/word');
var db = require('../db');
var ObjectId = require('mongodb').ObjectId;
var wordsCollection = db.collection('words');

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
		else {
			res.send(404)
		}
	});
}

var existWord = function (req, res, next) {
	var checkedWord = req.body;
	// console.log(req);
	wordsCollection.findOne({word: checkedWord.word}, function (err, data) {
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

var getStarWords = function (req, res, next) {
	wordsCollection.find({star: true}).toArray(function (err, data) {
		if (!err) {
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

var getHotWords = function (req, res, next) {
	wordsCollection.find({rate: {$gte: 0.5}}).toArray(function (err, data) {
		if (!err) {
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

var oneWord = function (req, res, next) {
	console.log(req.body.id);
	wordsCollection.findOne({'_id': ObjectId(req.body.id)}, function (data, err) {
		if (!err) {
			res.send({
				msg: 'success',
				data: data
			})
		}
		else {
			res.send(404);
		}
	})
}

router.post('/words', saveWord);
router.post('/existWord', existWord);
router.get('/getWords', getWords);
router.get('/getStarWords', getStarWords);
router.get('/getHotWords', getHotWords);
router.post('/oneWord', oneWord);

module.exports = router;