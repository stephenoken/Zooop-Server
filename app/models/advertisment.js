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
  description: "It is a long, narrow loaf of French bread.", 
  location:["53.350140", "-6.266155"], 
  image: "https://www.colourbox.com/preview/4834106-baguette-over-white.jpg"});

// compile User model
module.exports = mongoose.model('Advertisment', AdSchema);
module.exports.example = schema;
