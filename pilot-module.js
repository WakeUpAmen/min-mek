'use strict';
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PilotSchema   = new Schema({
    name: String,
	rank: String,
    age: String,
    skills: String,
    meth: String,
});

module.exports = mongoose.model('Pilot', PilotSchema);
