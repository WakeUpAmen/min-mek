'use strict';
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PilotSchema   = new Schema({
    iid: String,
    name: String,
	rank: String,
    age: String,
    skills: String,
    meth: String,
    // meth: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
});

module.exports = mongoose.model('Pilot', PilotSchema);
