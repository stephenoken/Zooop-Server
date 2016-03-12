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
    required: false,
    select: false
  },
  taste:{
    type: String,
    required: false
  },
  dietaryTags:{
    type: {},
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

