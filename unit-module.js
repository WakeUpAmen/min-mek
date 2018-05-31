'use strict';
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UnitSchema   = new Schema({
    name: String,
	affi: String,
    icon: String,
    color: String,
});

module.exports = mongoose.model('Unit', UnitSchema);
