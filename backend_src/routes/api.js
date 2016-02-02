"use strict";
const express = require("express");
const router = express.Router();

class User {
  constructor(firstName, lastName, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
  }
  setFavDish(favDish){
    this.favDish = favDish;
  }
  response(){
    return `${this.firstName} has been created and likes ${this.favDish}`;
  }
}
router.post('/getInfo',(req,res)=>{
  //req.body allows you to send a JSON object to the server securely
  var user = new User(req.body.firstName,req.body.lastName,req.body.country);
  user.setFavDish(req.body.favDish);
  res.type('html').send(user.response());
});

module.exports = router;
