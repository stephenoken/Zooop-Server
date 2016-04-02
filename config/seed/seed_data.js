'use strict';

const mongoose = require("mongoose");
const config = require("./../index");
// const User = require("./../../app/models/user");
// const Product = require("./../../app/models/product");
// const seedUsers = require("./data/user");
// const seedProducts = require("./data/products");
const Client = require("./../../app/models/client");

mongoose.connect(config.mongodb.uri);

// Product.insertMany(seedProducts,(err)=>{
//   if (err) {
//     throw err;
//   }
//   console.log("Seed DB with master products");
// });

const clientData = [
  {
    name: 'Harpreet Harpitson1',
    preferences: ['Mexican'],
    _id: 'eWceM_TDt2Y:APA91bHB7Emw8L4qkKYgQ0SadlTn7tLF0lrdNB1LOl55QLHXPAYyJf9rTBiG8d4GpkOQ5e932WkheHxt5jVasRAYerNdhGhqZOTq9Z41oKcESJvFY82AO0TsOK5vnT76veEbx8hBFEPJ'
  },{
    name: 'Harpreet Harpitson2',
    preferences: ['Mexican'],
    _id: 'eWceM_TDt2Y:APA91bHB7Emw8L4qkKYgQ0SadlTn7tLF0lrdNB1LOl55QLHXPAYyJf9rTBiG8d4GpkOQ5e932WkheHxt5jVasRAYerNdhGhqZOTq9Z41oKcESJvFY82AO0TsOK5vnT76veEbx8hBFEPJ2'
  },{
    name: 'Harpreet Harpitson3',
    preferences: ['Chinese'],
    _id: 'eWceM_TDt2Y:APA91bHB7Emw8L4qkKYgQ0SadlTn7tLF0lrdNB1LOl55QLHXPAYyJf9rTBiG8d4GpkOQ5e932WkheHxt5jVasRAYerNdhGhqZOTq9Z41oKcESJvFY82AO0TsOK5vnT76veEbx8hBFEPJ3'
  }
];
Client.insertMany(clientData,(err)=>{
  console.log(err);
});
// User.insertMany(seedUsers,(err)=>{
//   if (err) {
//     throw err;
//   }
//   console.log("Seed DB with users");
// });
