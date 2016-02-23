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
var schema = new sample({ category: "Coffee",
	name: "Cafe Latte",
	properties:["Italy", "sweet", ["milk","sugar"]]});
console.log(schema);
schema.save(function(err){
 		if(err){
 			console.log(err);
 		}
 		console.log("Product added");
 	});
module.exports = mongoose.model('Product', ProductSchema);
module.exports.sample = schema; 