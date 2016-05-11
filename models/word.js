var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WordSchema = new Schema({
	word: String,
	mean: String,
	origin: String,
	same: [String],
	label: [String],
	rate: [Number]
});

var Word = mongoose.model('Word', WordSchema);
module.exports = Word;