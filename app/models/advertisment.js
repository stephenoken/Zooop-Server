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
  img_url: {
    name: "imageUrl",
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  retailer_id: {
    type: String,
    required: true
  }
});

// compile User model
module.exports = mongoose.model('Advertisment', AdSchema);
