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
	properties: {
		origin:{
	      type: String,
	      required: true
		},
		taste:{
			type: String,
			required: true
		},
		dietaryTags:{
			type: [String],
			required: true
		}
	}
});

ProductSchema.statics.findByName = function (name,cb){
	this.findOne({name:name}).exec((err,product)=>{
		cb(product);
	});
};

module.exports = mongoose.model('Product', ProductSchema);
