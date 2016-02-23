'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
	category: {
		type: String,
		required: true
	},
	name: {
		type: String,
        required: true 
	},
	properties: [{
      name: "origin",
      type: String,
      required: true
	},
	{
		name: "taste",
		type: "String",
		required: true
	},
	{
		name: "Dietary Tags",
		type: [String],
		required: true
	}]
});

var sample = mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Product', ProductSchema);