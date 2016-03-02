'use strict';

const mongoose = require("mongoose");
const config = require("./../index");
const User = require("./../../app/models/user");
const Product = require("./../../app/models/product");
const seedUsers = require("./data/user");
const seedProducts = require("./data/products");

mongoose.connect(config.mongodb.uri);

Product.insertMany(seedProducts,(err)=>{
  if (err) {
    throw err;
  }
  console.log("Seed DB with master products");
});

// User.insertMany(seedUsers,(err)=>{
//   if (err) {
//     throw err;
//   }
//   console.log("Seed DB with users");
// });
