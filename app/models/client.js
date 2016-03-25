'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  _id:{
    type:String,
    required: true,
    unique:true
  },
  name:{
    type:String,
    required:true
  },
  preferences:{
    type:[String],
    required:true
  }
});

module.exports = mongoose.model('Client', ClientSchema);
