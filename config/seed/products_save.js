'use strict';

const mongoose = require("mongoose");
const config = require("./../index");
const Product = require("./../../app/models/product");
const seedProducts = require("./data/products");

mongoose.connect(config.mongodb.uri);

Product.insertMany(seedProducts,(err)=>{
  if (err) {
    throw err;
  }
  console.log("Seed DB with master products");
});
