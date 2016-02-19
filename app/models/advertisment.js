'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AdSchema = new Schema({
  name:  {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    select: false
  },
  location: [{
    name: "latitute",
    type: String,
    required: true
  },
  { name: "longitude",
    type: String,
    required: true
  }],
  image: {
    name: "imageUrl",
    type: String,
    required: false
  }
});
// This is just an example ad, needs to be integrated 
// with the front end
var example = mongoose.model('Advertisment', AdSchema);
var schema = new example({ name: "Baguette",
  description: "has the shape of a dick", 
  location:["53.350140", "-6.266155"], 
  image: "www.pornhub.com"});
// console.log(schema);
// compile User model
module.exports = mongoose.model('Advertisment', AdSchema);
module.exports.example = schema;
