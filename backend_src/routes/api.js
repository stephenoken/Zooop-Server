"use strict";
const express = require("express");
const router = express.Router();

class User {
  constructor(firstName, lastName, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.favDish;
  }

}
router.post('/getInfo',(req,res)=>{
  res.send(req.param("Foo")+" You ");
});

router.post('/addUser',function (req,res) {

});


module.exports = router;
