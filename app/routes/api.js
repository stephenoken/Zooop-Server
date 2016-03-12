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
router.post('/discover', adsCtrl.saveDiscoverAd());

router.get('/businessSearch',(req,res)=>{
  res.status(200).type('json').send(searchData);
});

router.get('/discoverSearch',(req,res)=>{
  res.status(200).type('json').send(searchData);
});

router.post('/messageDiggy', (req,res)=>{
/* just a basic example implementation */
  var inMessage = req.body.message;
  var outMessage = "";

  var keys = ["burrito", "how are you", "hungry"];
  console.log(keys);

  for(var i = 0; i < keys.length; i++) {
    if(inMessage.indexOf(keys[i]) > -1) {
      switch(i) {
        case 0:
          outMessage = "You should get a burrito from Boojum!";
          break;
        case 1:
          outMessage = "I'm a machine... I don't have feelings (yet)";
          break;
        case 2:
          outMessage = "me too :/";
          break;
        default:
          outMessage = "That's good for you!";
          break;
      }
    }
  }

  var diggyResponse ={
    diggyResponse:outMessage
  };

  res.status(200).type('json').send(diggyResponse);
});

module.exports = router;
