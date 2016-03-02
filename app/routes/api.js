"use strict";
const express = require("express");
const router = express.Router();
const adsCtrl = require("./../controllers/adsController");
/*Start - This will need to be removed */
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

var searchData ={
  resturant1:{
    name:"Boojum",
    latitude:"53.34443",
    longitude: "6.2577"
  }
};
/*End - This will need to be removed */
router.post('/getInfo',(req,res)=>{
  //req.body allows you to send a JSON object to the server securely
  var user = new User(req.body.firstName,req.body.lastName,req.body.country);
  user.setFavDish(req.body.favDish);
  //The response for the request
  res.status(200).type('html').send(user.response());
});

router.post('/getAd', adsCtrl.sendAd());

router.get('/businessSearch',(req,res)=>{
  res.status(200).type('json').send(searchData);
});

router.get('/discoverSearch',(req,res)=>{
  res.status(200).type('json').send(searchData);
});

module.exports = router;
