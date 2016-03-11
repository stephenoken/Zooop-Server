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
  taste:{
    type: String,
    required: true
  },
  dietaryTags:{
    type: [String],
    required: true
  },
  image: {
    name: "imageUrl",
    type: String,
    required: false
  }
});

// compile User model
module.exports = mongoose.model('Advertisment', AdSchema);

