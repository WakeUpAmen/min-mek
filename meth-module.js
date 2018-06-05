'use strict';
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MethSchema   = new Schema({
    iid: String,
    name: String,
	model: String,
    weight: String,
    cclass: String,
});

module.exports = mongoose.model('Meth', MethSchema);
