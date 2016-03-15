'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AdSchema = new Schema({
  type:  {
    type: String,
    required: true,
    unique: true
  },
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
  tags:{
    type: [],
    required: true
  },
  imgUrl: {
    name: "imageUrl",
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  retailerId: {
    type: String,
    required: true
  }
});

// compile User model
module.exports = mongoose.model('Advertisment', AdSchema);
